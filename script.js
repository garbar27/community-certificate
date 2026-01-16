function generate() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value;
  const date = document.getElementById("joinDate").value;

  if (!name || !date) {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("certName").innerText = name.toUpperCase();
  document.getElementById("certRole").innerText = role.toUpperCase();
  document.getElementById("certDate").innerText = date;

  document.getElementById("certificate").style.display = "block";
}

async function downloadPDF() {
  const cert = document.querySelector(".scroll");
  const canvas = await html2canvas(cert, { scale: 2 });
  const img = canvas.toDataURL("image/png");

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("landscape","px",[canvas.width, canvas.height]);
  pdf.addImage(img,"PNG",0,0,canvas.width,canvas.height);
  pdf.save("MagicBlock-Certificate.pdf");
}

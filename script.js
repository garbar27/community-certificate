function generate() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const date = document.getElementById("date").value;

  if (!name || !date) {
    alert("Please fill name and date");
    return;
  }

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;
}

async function downloadPDF() {
  const cert = document.getElementById("certificate");

  const canvas = await html2canvas(cert, {
    scale: 2,
    backgroundColor: null
  });

  const imgData = canvas.toDataURL("image/png");

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save("MagicBlock-Certificate.pdf");
}

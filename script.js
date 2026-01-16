function generate() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const date = document.getElementById("joinDate").value;

  if (!name || !date) {
    alert("Please enter name and join date");
    return;
  }

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;

  document.getElementById("certificate").classList.remove("hidden");
}

/* PDF */
async function downloadPDF() {
  const cert = document.getElementById("certificate");

  const canvas = await html2canvas(cert, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save("MagicBlock-Certificate.pdf");
}

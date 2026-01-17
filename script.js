function generate() {
  const name = document.getElementById("nameInput").value || "NAME";
  const role = document.getElementById("roleInput").value || "ROLE";
  const dateInput = document.getElementById("dateInput").value;

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;

  if (dateInput) {
    document.getElementById("certDate").innerText = dateInput;
  }
}

async function downloadPDF() {
  const certificate = document.getElementById("certificate");

  const canvas = await html2canvas(certificate, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save("MagicBlock_Certificate.pdf");
}

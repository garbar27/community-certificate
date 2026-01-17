function generateCertificate() {
  const name = document.getElementById("nameInput").value || "NAME";
  const role = document.getElementById("roleSelect").value;
  const date = document.getElementById("dateInput").value || "—";

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;
}

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const cert = document.getElementById("certificate");

  const canvas = await html2canvas(cert, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#fff6d8"
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("portrait", "px", [
    canvas.width,
    canvas.height
  ]);

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save("MagicBlock_Certificate.pdf");
}

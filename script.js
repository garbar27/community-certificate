function generate() {
  const nameInput = document.getElementById("nameInput");
  const roleInput = document.getElementById("roleInput");
  const dateInput = document.getElementById("dateInput");

  const name = nameInput ? nameInput.value : "NAME";
  const role = roleInput ? roleInput.value : "ROLE";
  const date = dateInput ? dateInput.value : "—";

  document.getElementById("certName").textContent = name;
  document.getElementById("certRole").textContent = role;
  document.getElementById("certDate").textContent = date;
}

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const cert = document.getElementById("certificate");

  const canvas = await html2canvas(cert, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save("MagicBlock_Certificate.pdf");
}

function generateCertificate() {
  const name = document.getElementById("nameInput").value || "NAME";
  const role = document.getElementById("roleSelect").value;
  const date = document.getElementById("dateInput").value || "—";

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;
}

async function downloadPDF() {
  const cert = document.getElementById("certificate");

  const canvas = await html2canvas(cert, {
    scale: 3,                 // висока якість
    useCORS: true,
    backgroundColor: "#fff6d8"
  });

  // створюємо PNG
  const image = canvas.toDataURL("image/png");

  // автоматичне завантаження
  const link = document.createElement("a");
  link.href = image;
  link.download = "MagicBlock_Certificate.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

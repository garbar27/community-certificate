function generateCertificate() {
  const name = document.getElementById("userName").value || "NAME";
  const role = document.getElementById("role").value || "ROLE";
  const date = document.getElementById("date").value || "—";

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;
}

function downloadPDF() {
  alert("PDF generation can be added with html2pdf.js later.");
}

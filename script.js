function generateCertificate() {
  const name = document.getElementById("userName").value || "NAME";
  const role = document.getElementById("userRole").value || "ROLE";
  const date = document.getElementById("date").value;

  document.getElementById("certName").textContent = name;
  document.getElementById("certRole").textContent = role;

  if (date) {
    document.getElementById("certDate").textContent =
      "Member since: " + date;
  }
}

function downloadPDF() {
  window.print();
}

function generateCertificate() {
  const name = document.getElementById("nameInput").value || "NAME";
  const role = document.getElementById("roleSelect").value;
  const dateInput = document.getElementById("dateInput").value;

  document.getElementById("certName").textContent = name;
  document.getElementById("certRole").textContent = role;
  document.getElementById("certDate").textContent = dateInput || "—";
}

function generateCertificate() {
  const name = document.getElementById("nameInput").value || "NAME";
  const role = document.getElementById("roleSelect").value;
  const date = document.getElementById("dateInput").value || "—";

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;
}

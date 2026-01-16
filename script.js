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

  document.getElementById("certificate").style.display = "block";
}

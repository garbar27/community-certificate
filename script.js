function generate() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value;
  const joinDate = document.getElementById("joinDate").value;

  if (!name || !joinDate) {
    alert("Please enter name and join date");
    return;
  }

  document.getElementById("certName").innerText = name.toUpperCase();
  document.getElementById("certRole").innerText = role.toUpperCase();
  document.getElementById("certDate").innerText = joinDate;

  document.getElementById("certificate").style.display = "block";
}

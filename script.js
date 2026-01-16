function generate() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const date = document.getElementById("date").value;

  if (!name || !date) {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;

  document.getElementById("certificate").classList.remove("hidden");
}

function downloadPDF() {
  window.print();
}

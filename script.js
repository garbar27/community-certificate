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

  const cert = document.getElementById("certificate");
  cert.classList.remove("hidden");

  document.body.classList.add("show-hands");
}

function downloadPDF() {
  window.print();
}

function generate() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  if (!name) {
    alert("Please enter your name");
    return;
  }

  const date = new Date().toLocaleDateString();
  const certId = "COMM-" + Date.now();

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;
  document.getElementById("certId").innerText = certId;

  document.getElementById("certificate").style.display = "block";
}


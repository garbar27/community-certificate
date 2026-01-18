let quizPassed = false;

function generateCertificate() {
  if (!quizPassed) {
    openQuiz();
    return;
  }

  const name = document.getElementById("nameInput").value || "NAME";
  const role = document.getElementById("roleSelect").value;
  const date = document.getElementById("dateInput").value || "—";

  document.getElementById("certName").innerText = name;
  document.getElementById("certRole").innerText = role;
  document.getElementById("certDate").innerText = date;
}

function openQuiz() {
  document.getElementById("quizOverlay").style.display = "flex";
}

function closeQuiz() {
  document.getElementById("quizOverlay").style.display = "none";
}

function checkQuiz() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;

  if (
    q1 === "A creative Web3 & developer community" &&
    q2 === "@Wizard" &&
    q3 === "Creativity and community"
  ) {
    quizPassed = true;
    closeQuiz();
    generateCertificate();
    alert("✨ Quiz passed! You can now generate your certificate.");
  } else {
    alert("❌ Some answers are incorrect. Try again!");
  }
}

async function downloadPDF() {
  if (!quizPassed) {
    openQuiz();
    return;
  }

  const cert = document.getElementById("certificate");

  const canvas = await html2canvas(cert, {
    scale: 3,
    useCORS: true,
    backgroundColor: "#fff6d8"
  });

  const image = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = image;
  link.download = "MagicBlock_Certificate.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

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

/* 🔥 ЄДИНА ТОЧКА ЛОГІКИ */
function submitQuiz() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;

  if (q1 === "correct" && q2 === "correct" && q3 === "correct") {
    quizPassed = true;
    closeQuiz();
    generateCertificate(); // ⬅ ОДРАЗУ ГЕНЕРУЄМО
    alert("✨ Quiz passed! Certificate unlocked.");
  } else {
    alert("❌ Some answers are incorrect.");
  }
}

async function downloadImage() {
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

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "MagicBlock_Certificate.png";
  link.click();
}

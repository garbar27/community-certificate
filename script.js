function generate() {
  const name = document.getElementById('nameInput').value || 'NAME';
  const role = document.getElementById('roleInput').value || 'ROLE';
  const date = document.getElementById('dateInput').value || '—';

  document.getElementById('certName').innerText = name;
  document.getElementById('certRole').innerText = role;
  document.getElementById('certDate').innerText = date;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;

  html2canvas(document.getElementById('certificate')).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('landscape', 'px', [canvas.width, canvas.height]);
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('MagicBlock_Certificate.pdf');
  });
}

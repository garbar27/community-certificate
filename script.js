function generate() {
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const date = document.getElementById('date').value;

  if (!name || !date) {
    alert('Please fill name and date');
    return;
  }

  document.getElementById('certName').innerText = name;
  document.getElementById('certRole').innerText = role;
  document.getElementById('certDate').innerText = date;
}

async function downloadPDF() {
  const area = document.getElementById('pdf-area');
  const canvas = await html2canvas(area, { scale: 2 });
  const img = canvas.toDataURL('image/png');

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('landscape', 'px', [canvas.width, canvas.height]);
  pdf.addImage(img, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save('MagicBlock-Certificate.pdf');
}

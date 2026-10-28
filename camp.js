const form = document.getElementById('camp-request');
const preview = document.getElementById('request-preview');
const output = document.getElementById('email-preview');
const status = document.getElementById('form-status');
const subject = 'Richiesta partecipazione Winter Fencing Camp 27–30 dicembre 2026';
const clean = value => String(value || '').trim();
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = clean(data.get('contactName'));
  const nameInput = form.elements.namedItem('contactName');
  nameInput.setCustomValidity(name ? '' : 'Inserisci il tuo nome e cognome.');
  if (!form.reportValidity()) return;
  const body = [
    'Buongiorno,',
    'vorrei informazioni per partecipare al Winter Fencing Camp del 27–30 dicembre 2026 a Trani, Via Zara 22.',
    '',
    `Nome del richiedente: ${name}`,
    `Email di contatto: ${clean(data.get('email'))}`,
    ...(clean(data.get('club')) ? [`Società schermistica: ${clean(data.get('club'))}`] : []),
    ...(clean(data.get('weapon')) ? [`Arma: ${clean(data.get('weapon'))}`] : []),
    '',
    clean(data.get('message')) || 'Vorrei conoscere programma, orari, quota e disponibilità.',
    '',
    'Resto in attesa delle informazioni e della conferma della società. Grazie.'
  ].join('\n');
  output.value = body;
  document.getElementById('email-link').href = `mailto:letrearmi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Richiesta preparata, non ancora inviata.';
  preview.hidden = false;
  output.focus();
});
form?.addEventListener('input', () => {
  form.elements.namedItem('contactName').setCustomValidity('');
  preview.hidden = true;
  output.value = '';
  document.getElementById('email-link').href = 'mailto:letrearmi@gmail.com';
  status.textContent = '';
});
document.getElementById('copy-request')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(`Oggetto: ${subject}\n\n${output.value}`);
    status.textContent = 'Testo copiato. Incollalo in una email a letrearmi@gmail.com e inviala.';
  } catch {
    output.focus();
    output.select();
    status.textContent = 'Seleziona e copia il testo, poi invialo a letrearmi@gmail.com.';
  }
});

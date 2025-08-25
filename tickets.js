const historyDB = {};
const historyContainer = document.getElementById('historyContainer');

const allTickets = [
  ...(typeof julyTickets  !== 'undefined' ? julyTickets  : []),
  ...(typeof juneTickets  !== 'undefined' ? juneTickets  : [])
];



console.log('Loaded tickets:', allTickets);

function createTicketHTML(ticket) {
  const result = ticket.result.trim().toLowerCase(); // trim whitespace
  let resultClass = '';
  if (result === 'win') resultClass = 'result-win';
  else if (result === 'loss') resultClass = 'result-loss';
  else if (result === 'refund') resultClass = 'result-refund';

  return `
    <div class="ticket">
      <strong>${ticket.date}</strong> - ${ticket.match} | Pick: <em>${ticket.pick}</em> | Result: <strong class="${resultClass}">${ticket.result.trim()}</strong>
    </div>
  `;
}

function createMonthSection(month, tickets) {
  const monthDiv = document.createElement('div');
  monthDiv.className = 'history-month';

  const header = document.createElement('div');
  header.className = 'month-header';
  header.innerHTML = `
    ${month}
    <span class="arrow">&#9654;</span>
  `;

  const content = document.createElement('div');
  content.className = 'month-content';
  content.innerHTML = tickets.map(createTicketHTML).join('');

  header.addEventListener('click', () => {
    const isOpen = content.classList.toggle('open');
    header.classList.toggle('active', isOpen);
  });

  monthDiv.appendChild(header);
  monthDiv.appendChild(content);
  return monthDiv;
}

function renderHistory() {
  historyContainer.innerHTML = '';
  for (const [month, tickets] of Object.entries(historyDB)) {
    const section = createMonthSection(month, tickets);
    historyContainer.appendChild(section);
  }
}

for (const ticket of allTickets) {
  if (!ticket.month) continue;
  if (!historyDB[ticket.month]) {
    historyDB[ticket.month] = [];
  }
  historyDB[ticket.month].push(ticket);
}




renderHistory();

window.onload = function () {
  const paymentInfo = JSON.parse(localStorage.getItem('paymentInfo'));
  const tickets = JSON.parse(localStorage.getItem('checkoutTickets'));

  if (!paymentInfo || !tickets) {
    document.body.innerHTML = '<h2>Invalid receipt data!</h2>';
    return;
  }

  document.getElementById('payment-details').innerHTML = `
    <p><strong>Name:</strong> ${paymentInfo.name}</p>
    <p><strong>Card:</strong> **** **** **** ${paymentInfo.cardNumber.slice(-4)}</p>
    <p><strong>Paid Amount:</strong> $${paymentInfo.amount}</p>
  `;

  const tableBody = document.getElementById('ticket-details');
  tickets.forEach(ticket => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ticket.title}</td>
      <td>${ticket.seats}</td>
      <td>$${ticket.price.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
  });
};
document.getElementById('back-btn').addEventListener('click', function() {
  window.location.href = 'Payment.html';
});
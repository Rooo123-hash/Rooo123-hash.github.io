
window.onload = function () {
  const tickets = JSON.parse(localStorage.getItem("checkoutTickets"));
  const total = localStorage.getItem("checkoutTotal");

  if (!tickets || tickets.length === 0) return;

  const tableBody = document.getElementById('summary-body');
  tickets.forEach(ticket => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ticket.title}</td>
      <td>${ticket.seats}</td>
      <td>$${ticket.price.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById('total-price').innerText = parseFloat(total).toFixed(2);
};


document.getElementById('pay-now-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const name = document.getElementById('fullname').value.trim();
  const cardNumber = document.getElementById('cardnumber').value.trim();
  const totalAmount = document.getElementById('total-price').innerText.trim();

  if (!name || !cardNumber) {
    alert("Please fill in all payment details!");
    return;
  }

  const paymentInfo = {
    name: name,
    cardNumber: cardNumber,
    amount: totalAmount
  };

  localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));


  window.location.href = 'done.html';

});


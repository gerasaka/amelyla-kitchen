const donutOrder = document.querySelector('#donutOrder');
const chocolateOrder = document.querySelector('#chocolateOrder');
const muffinOrder = document.querySelector('#muffinOrder');

function updateTotal() {
  const price =
    15 * donutOrder.value + 20 * chocolateOrder.value + 16 * muffinOrder.value;

  document.querySelector('.total').innerHTML = price * 1000;
}

donutOrder.addEventListener('input', () => {
  document.querySelector('.donut').innerHTML = 15000 * donutOrder.value;
  updateTotal();
});

chocolateOrder.addEventListener('input', () => {
  document.querySelector('.chocolate').innerHTML = 20000 * chocolateOrder.value;
  updateTotal();
});

muffinOrder.addEventListener('input', () => {
  document.querySelector('.muffin').innerHTML = 16000 * muffinOrder.value;
  updateTotal();
});

document.querySelector('.donut').innerHTML = 15000 * donutOrder.value;
document.querySelector('.chocolate').innerHTML = 20000 * chocolateOrder.value;
document.querySelector('.muffin').innerHTML = 16000 * muffinOrder.value;
updateTotal();

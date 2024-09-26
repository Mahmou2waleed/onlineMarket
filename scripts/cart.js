document.querySelectorAll('.cart-item-remove button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.cart-item');
    item.remove();
    updateCartTotal();
  });
});

function updateCartTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const priceElement = item.querySelector('.cart-item-info p:nth-child(2)');
    const price = parseFloat(priceElement.innerText.replace('Price: EGP ', ''));
    const quantity = item.querySelector('input').value;
    total += price * quantity;
  });
  document.querySelector('.cart-summary p').innerText = `Total: EGP ${total.toFixed(2)}`;
}

document.querySelectorAll('.cart-item input').forEach(input => {
  input.addEventListener('change', updateCartTotal);
});

updateCartTotal();


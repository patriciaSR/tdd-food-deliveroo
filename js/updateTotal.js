function updateTotal(price, cart, action) {
  const IVA = 0.21;
  if (typeof price === 'number') {
    if (action === 'sum') {
      cart.total += price;
    } else {
      cart.total -= price;
    }
    const totalIva = cart.total * IVA;

    const textTotal = document.querySelector('span');
    textTotal.innerHTML = cart.total + totalIva;
  } else {
    throw new Error('Not a valid format');
  }
}

export { updateTotal };

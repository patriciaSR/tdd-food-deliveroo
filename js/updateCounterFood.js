function updateCounterFood(id, action, cart) {
  const cartList = document.querySelector('ol');
  const selectedFood = cartList.querySelector(`li#${id}`);

  if (selectedFood) {
    const selectedCounterInCart = selectedFood.querySelector('.food__counter');
    let selectedCounterValue = parseInt(selectedCounterInCart.textContent, 10);

    if (action === 'sum') {
      selectedCounterValue += 1;
    } else {
      selectedCounterValue -= 1;
    }

    if (selectedCounterValue !== 0) {
      selectedCounterInCart.textContent = selectedCounterValue;
    } else {
      selectedFood.remove();
      const indexFood = cart.products.findIndex((food) => food === selectedFood.id);
      cart.products.splice(indexFood, 1);
    }
  }
}


export { updateCounterFood };

import { createNodeTag } from './createFoodCard.js';
import { updateTotal } from './updateTotal.js';

function updateCounterFood(id, action, cart) {
  const cartList = document.querySelector('ol');
  const selectedFood = cartList.querySelector(`li#${id}`);

  if (selectedFood) {
    const selectedCounterInCart = selectedFood.querySelector('.food__counter');
    let selectedCounterValue = parseInt(selectedCounterInCart.textContent, 10);

    if (action === 'sum') {
      selectedCounterValue++;
    } else {
      selectedCounterValue--;
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

function printFoodInCart(element, foodItem, cart) {
  const newCartElement = element.cloneNode(true);
  const addToCartBtn = newCartElement.querySelector('button');
  addToCartBtn.remove();

  const newCounter = createNodeTag('p', 'food__counter', '1');
  const newAddBtn = createNodeTag('button', 'food__add-btn', '+');
  const newRemoveBtn = createNodeTag('button', 'food__remove-btn', '-');

  newAddBtn.addEventListener('click', () => {
    updateCounterFood(element.id, 'sum', cart);
    updateTotal(foodItem.price, cart, 'sum');
  });

  newRemoveBtn.addEventListener('click', () => {
    updateCounterFood(element.id, 'rest', cart);
    updateTotal(foodItem.price, cart);
  });

  newCartElement.appendChild(newCounter);
  newCartElement.appendChild(newAddBtn);
  newCartElement.appendChild(newRemoveBtn);

  const cartList = document.querySelector('ol');

  cartList.appendChild(newCartElement);
}

export { updateCounterFood, printFoodInCart };

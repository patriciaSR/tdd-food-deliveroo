import { createNodeTag } from './createFoodCard.js';

function updateCounterFood(id, action, cartArr) {
  const cartList = document.querySelector('ol');
  const foodsInCart = cartList.querySelectorAll('li');

  let selectedFood;
  foodsInCart.forEach((food) => {
    if (food.id === id) {
      selectedFood = food;
      return selectedFood;
    }
  });

  if (selectedFood) {
    const selectedCounterInCart = selectedFood.querySelector('.food__counter');
    let selectedCounterValue = parseInt(selectedCounterInCart.textContent, 10);

    if (action === 'sum') {
      selectedCounterValue++;
    } else {
      selectedCounterValue--
    }

    if (selectedCounterValue !== 0) {
      selectedCounterInCart.textContent = selectedCounterValue;
    } else {
      selectedFood.remove();
      const indexFood = cartArr.findIndex((food) => food === selectedFood.id);
      cartArr.splice(indexFood, 1);
    }
  }
}

function printFoodInCart(element, cartArr) {
  const newCartElement = element.cloneNode(true);
  const addToCartBtn = newCartElement.querySelector('button');
  addToCartBtn.remove();

  const newCounter = createNodeTag('p', 'food__counter', '1');
  const newAddBtn = createNodeTag('button', 'food__add-btn', '+');
  const newRemoveBtn = createNodeTag('button', 'food__remove-btn', '-');

  newAddBtn.addEventListener('click', () => {
    updateCounterFood(element.id, 'sum', cartArr);
  });

  newRemoveBtn.addEventListener('click', () => {
    updateCounterFood(element.id, 'rest', cartArr);
  });

  newCartElement.appendChild(newCounter);
  newCartElement.appendChild(newAddBtn);
  newCartElement.appendChild(newRemoveBtn);

  const cartList = document.querySelector('ol');

  cartList.appendChild(newCartElement);
}

export { updateCounterFood, printFoodInCart };

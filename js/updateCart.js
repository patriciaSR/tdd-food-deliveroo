import { createNodeTag } from './createFoodCard.js';

const idArray = ["1a", "2b", "3c", "4b", "5d"];


function updateCounterFood(id, action) {
  const cartList = document.querySelector('ol');
  const selectedFoodInCart = cartList.getElementById(id);
  const selectedCounterInCart = selectedFoodInCart.querySelector('.food__counter');
  let selectedCounterValue = parseInt(selectedCounterInCart.textContent, 10);

  if (action === 'sum') {
    selectedCounterValue++;
    selectedFoodInCart.innerHtml = selectedCounterValue;
  }
}

function printFoodInCart(element) {
  const addToCartBtn = element.querySelector('button');
  addToCartBtn.remove();

  const newCounter = createNodeTag('p', 'food__counter', '1');
  const newAddBtn = createNodeTag('button', 'food__add-btn', '+');
  const newRemoveBtn = createNodeTag('button', 'food__remove-btn', '-');

  newAddBtn.addEventListener('click', () => {
    updateCounterFood(element.id, 'sum');
  });

  newRemoveBtn.addEventListener('click', () => {
    updateCounterFood(element.id, 'rest');
  });

  element.appendChild(newCounter);
  element.appendChild(newAddBtn);
  element.appendChild(newRemoveBtn);

  const cartList = document.querySelector('ol');

  cartList.appendChild(element);
}

function updateCart(bool, element) {
  if (bool) {
    updateCounterFood(element.id, 'sum');
  } else {
    printFoodInCart(element);
    idArray.push(element.id);
  }
}

export { updateCart, updateCounterFood, printFoodInCart };

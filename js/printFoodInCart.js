import { createNodeTag } from './createFoodCard.js';
import { updateTotalPrice } from './updateTotalPrice.js';
import { updateCounterFood } from './updateCounterFood.js';


function printFoodInCart(element, foodItem, cart) {
  const newCartElement = element.cloneNode(true);
  const addToCartBtn = newCartElement.querySelector('button');
  const foodDescription = newCartElement.querySelector('.food__description');
  const ingredients = newCartElement.querySelector('.food__ingredients-list');

  addToCartBtn.remove();
  foodDescription.remove();
  ingredients.remove();


  const newCounter = createNodeTag('p', 'food__counter', '1');
  const newAddBtn = createNodeTag('button', 'food__add-btn', '+');
  const newRemoveBtn = createNodeTag('button', 'food__remove-btn', '-');

  newAddBtn.addEventListener('click', () => {
    updateCounterFood(element.id, 'sum', cart);
    updateTotalPrice(foodItem.price, cart, 'sum');
  });

  newRemoveBtn.addEventListener('click', () => {
    updateCounterFood(element.id, 'rest', cart);
    updateTotalPrice(foodItem.price, cart);
  });

  newCartElement.appendChild(newCounter);
  newCartElement.appendChild(newAddBtn);
  newCartElement.appendChild(newRemoveBtn);

  const cartList = document.querySelector('ol');

  cartList.appendChild(newCartElement);
}

export { printFoodInCart };

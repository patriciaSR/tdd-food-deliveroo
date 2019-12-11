import { findFoodInCart } from './findFoodInCart.js';
import { updateTotal } from './updateTotal.js';
import { printFoodInCart, updateCounterFood } from './updateCart.js';

function addToCart(e, foods, cartArr = []) {
  const element = e.target.parentElement;
  const foodItem = foods.find((food) => food.id === element.id);

  const foodIsIncluded = findFoodInCart(element.id, cartArr);

  if (foodIsIncluded) {
    updateCounterFood(element.id, 'sum', cartArr);
  } else {
    printFoodInCart(element, cartArr);
    cartArr.push(element.id);
  }

  updateTotal(foodItem.price);
}

export { addToCart };

import { findFoodInCart } from './findFoodInCart.js';
import { updateTotal } from './updateTotal.js';
import { printFoodInCart, updateCounterFood } from './updateCart.js';

function addToCart(e, foods, cart) {
  const element = e.target.parentElement;
  const foodItem = foods.find((food) => food.id === element.id);

  const foodIsIncluded = findFoodInCart(element.id, cart.products);

  if (foodIsIncluded) {
    updateCounterFood(element.id, 'sum', cart);
  } else {
    printFoodInCart(element, foodItem, cart);
    cart.products.push(element.id);
  }

  updateTotal(foodItem.price, cart, 'sum');
}

export { addToCart };

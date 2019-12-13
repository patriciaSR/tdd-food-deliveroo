import { findFoodInCart } from './findFoodInCart.js';
import { updateTotalPrice } from './updateTotalPrice.js';
import { printFoodInCart } from './printFoodInCart.js';
import { updateCounterFood } from './updateCounterFood.js';

function addToCart(e, foods, cart) {
  const element = e.target.parentElement;
  const selectedFood = foods.find((food) => food.id === element.id);

  const foodIsIncluded = findFoodInCart(element.id, cart.products);

  if (foodIsIncluded) {
    updateCounterFood(element.id, 'sum', cart);
  } else {
    printFoodInCart(element, selectedFood, cart);
    cart.products.push(element.id);
  }

  if (selectedFood) {
    updateTotalPrice(selectedFood.price, cart, 'sum');
  }
}

export { addToCart };

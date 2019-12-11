import { findFoodInCart } from './findFoodInCart.js';
import { updateTotal } from './updateTotal.js';

function addToCart(e, foods) {
 const element = e;
 const foodItem = foods.find(food => food.id === element.id);

 findFoodInCart(element.id);
 updateTotal(foodItem.price);
}

export { addToCart };

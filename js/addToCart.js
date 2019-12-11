import { findFoodInCart } from './findFoodInCart.js';
import { updateTotal } from './updateTotal.js';
import { updateCart } from './updateCart.js';

const idArray = ["1a", "2b", "3c", "4b", "5d"];


function addToCart(e, foods) {
 const element = e;
 const foodItem = foods.find(food => food.id === element.id);

 const foodIsIncluded = findFoodInCart(element.id, idArray);
 updateCart(foodIsIncluded, element);
 updateTotal(foodItem.price);
 
};

export { addToCart };

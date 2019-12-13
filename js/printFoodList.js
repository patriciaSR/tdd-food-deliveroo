import { createFoodCard } from './createFoodCard.js';

let foodData = [];

function printFoodList(foods) {
  foodData = foods;
  const newFoodCards = foods.map((food) => {
    const newCard = createFoodCard(food);
    return newCard;
  });

  const list = document.querySelector('.restaurant__food-list');

  newFoodCards.forEach((card) => list.appendChild(card));
}

export { printFoodList, foodData };

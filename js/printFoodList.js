import { createFoodCard } from './createFoodCard.js';

function printFoodList(foods) {
  const newFoodCards = foods.map((food) => {
    const newCard = createFoodCard(food);
    return newCard;
  });

  const list = document.querySelector('.restaurant__food-list');

  newFoodCards.forEach((card) => list.appendChild(card));
}

export { printFoodList };

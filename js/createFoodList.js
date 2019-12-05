import { createFoodCard } from './createFoodCard.js';

function createFoodList(arrFood) {
  const newFoodCards = arrFood.map((food) => {
    const newCard = createFoodCard(food);
    return newCard;
  });

  const list = document.querySelector('.restaurant__food-list');

  newFoodCards.forEach((card) => list.appendChild(card));
}

export { createFoodList };

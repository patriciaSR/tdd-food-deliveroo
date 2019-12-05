function createFoodCard(foodObj) {
  const {
    id,
    name,
    price,
    description,
    image,
    ingredients
  } = foodObj;

  const newCardContainer = document.createElement('li');

  return newCardContainer;

}

export { createFoodCard };
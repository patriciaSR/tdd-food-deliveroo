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
  newCardContainer.classList.add('food__card');
  newCardContainer.id = id;

  const newFoodImage = document.createElement('img');
  newFoodImage.classList.add('food__image');
  newFoodImage.src = image;
  newFoodImage.alt = name;

  
  const newFoodTitle = document.createElement('h3');
  newFoodTitle.classList.add('food__title');
  const newFoodTitleText = document.createTextNode(name);
  newFoodTitle.appendChild(newFoodTitleText);

  const newFoodDescription = document.createElement('p');
  newFoodDescription.classList.add('food__description');
  const newFoodDescriptionText = document.createTextNode(description);
  newFoodDescription.appendChild(newFoodDescriptionText);

  const newIngredientsList = document.createElement('ul');
  newIngredientsList.classList.add('food__ingredients-list');
  
  ingredients.forEach(ingredient => {
    const newIngredient = document.createElement('li');
    newIngredient.classList.add('ingredients-list__item');
    const newIngredientText = document.createTextNode(ingredient);
    newIngredient.appendChild(newIngredientText);

    newIngredientsList.appendChild(newIngredient);

  })

  newCardContainer.appendChild(newFoodImage);
  newCardContainer.appendChild(newFoodTitle);
  newCardContainer.appendChild(newFoodDescription);
  newCardContainer.appendChild(newIngredientsList);



  return newCardContainer;

}

export { createFoodCard };
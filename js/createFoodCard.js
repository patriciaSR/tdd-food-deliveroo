function createNodeTag(tag, className, text, id, img) {
  const newTag = document.createElement(tag);
  newTag.classList.add(className);
  const newText = document.createTextNode(text);
  newTag.appendChild(newText);
  if(id) {
    newTag.id = id;
  }
  if(img) {
    newTag.src = img
    newTag.alt = text
  }

  return newTag;
};

function appendElements(parentNode, ...rest) {
  rest.forEach(childNode => {
    parentNode.appendChild(childNode)
  });
};

function createFoodCard(foodObj) {
  const classNames = {
    card: 'food__card',
    image: 'food__image',
    title: 'food__title',
    description: 'food__description',
    ingredientsItem: 'ingredients-list__item',
    ingredientsList: 'food__ingredients-list',
    price: 'food__price',
    button: 'food__add-button'
  }

  const {
    id,
    name,
    price,
    description,
    image,
    ingredients
  } = foodObj;

  const newCardContainer = createNodeTag('li', classNames.card, '', id);
  const newFoodImage = createNodeTag('img', classNames.image, name, null, image);
  const newFoodTitle = createNodeTag('h3', classNames.title, name);
  const newFoodDescription = createNodeTag('p', classNames.description, description);
  const newIngredientsList = createNodeTag('ul', classNames.ingredientsList);
  const newFoodPrice = createNodeTag('p', classNames.price, price);
  const newAddButton = createNodeTag('button', classNames.button, '+');
  
  ingredients.forEach(ingredient => {
    const newIngredient = createNodeTag('li', classNames.ingredientsItem, ingredient);
    
    newIngredientsList.appendChild(newIngredient);
  });

  appendElements(newCardContainer, newFoodImage, newFoodTitle, newFoodDescription, newIngredientsList, newFoodPrice, newAddButton);

  return newCardContainer;

};

export { createFoodCard };
import { mockFoodData } from './fixtures/mockFoodData.js';
import { createFoodCard } from '../js/createFoodCard.js';

import * as addToCartModule from '../js/addToCart.js';


describe('test createFoodCard meth', () => {
  const foodObject = mockFoodData[0];

  test('it returns card with all the info', () => {

    const result = createFoodCard(foodObject);

    const newfoodImage = result.querySelector('img');
    const newfoodTitle = result.querySelector('h3');
    const newFoodDescription = result.querySelector('.food__description');
    const newFoodIngredientsList = result.querySelector('.food__ingredients-list');
    const newFoodPrice = result.querySelector('.food__price');
    const priceNumber = parseFloat(newFoodPrice.textContent);
    const newButton = result.querySelector('.food__add-button');

    expect(result.tagName).toBe('LI');
    expect(result.id).toBe(foodObject.id);

    expect(newfoodImage.src).toBe(foodObject.image);
    expect(newfoodImage.alt).toBe(foodObject.name);

    expect(newfoodTitle.textContent).toBe(foodObject.name);
    expect(newFoodDescription.textContent).toBe(foodObject.description);

    expect(newFoodIngredientsList.tagName).toBe('UL');

    expect(newFoodPrice.tagName).toBe('P');
    expect(priceNumber).toBe(foodObject.price);

    expect(newButton.tagName).toBe('BUTTON');
  });

  test('it adds an eventListener to addBtn', () => {
    const spyAddToCart = jest.spyOn(addToCartModule, 'addToCart');

    const result = createFoodCard(foodObject);
    document.body.innerHTML = `<ol>${result}</ol>`;
    const newButton = result.querySelector('.food__add-button');
    newButton.click();

    expect(spyAddToCart).toHaveBeenCalled();
    expect(spyAddToCart).toHaveBeenCalledWith(expect.any(Event), expect.any(Array), expect.any(Object));
  });

  test('it doesn\'t create card if the object is not provided', () => {
    expect(() => {
      createFoodCard();
    }).toThrow();
  });
});

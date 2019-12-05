import { mockFoodData } from './fixtures/mockFoodData.js';
import { createFoodCard } from '../js/createFoodCard.js';

describe('test createFoodCard meth', () => {
  test('it returns card with all the info', () => {
    const foodObject = mockFoodData[0];

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

  test('don\'t create card if the object is not provided', () => {
    expect(() => {
      createFoodCard();
    }).toThrow();
  });
  });


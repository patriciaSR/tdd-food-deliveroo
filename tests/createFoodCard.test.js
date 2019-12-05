/* eslint-disable no-undef */
import { mockFoodData } from './fixtures/mockFoodData.js';
import { createFoodCard } from '../js/createFoodCard.js';

describe('test createFoodCard meth', () => {
  test('it returns a new li with correct food object info', () => {
    const foodObject = mockFoodData[0];

    const result = createFoodCard(foodObject);

    const newfoodImage = result.querySelector('img');
    const newfoodTitle = result.querySelector('h3');
    const newFoodDescription = result.querySelector('.food__description');
    const newFoodIngredientsList = result.querySelector('.food__ingredients-list');


    expect(result.tagName).toBe('LI');
    expect(result.id).toBe(foodObject.id);

    expect(newfoodImage.src).toBe(foodObject.image);
    expect(newfoodImage.alt).toBe(foodObject.name);

    expect(newfoodTitle.textContent).toBe(foodObject.name);
    expect(newFoodDescription.textContent).toBe(foodObject.description);

    expect(newFoodIngredientsList.tagName).toBe('UL');
  });
});

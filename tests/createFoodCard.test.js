import { mockFoodData } from './fixtures/mockFoodData.js';
import { createFoodCard } from '../js/createFoodCard.js';

describe('test createFoodCard meth', () => {
  test('it returns a new li with food object info', () => {
    const foodObject = mockFoodData[0];
    
    const result = createFoodCard(foodObject);

    expect(result.tagName).toBe('LI');
  });
});
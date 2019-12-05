import { createFoodList } from '../js/createFoodList.js';
import { mockFoodData } from './fixtures/mockFoodData.js';

describe('test createFoodList method', () => {
  test('it adds <li> to ul list', () => {
    document.body.innerHTML = '<ul class="restaurant__food-list"></ul>';

    const arrFood = mockFoodData;

    createFoodList(arrFood);
    const list = document.querySelector('ul');

    expect(list.length).not.toBe(arrFood.length);
  });

  test('don\'t create new li without node argument', () => {
    expect(() => {
      createFoodList();
    }).toThrow();
  });
});

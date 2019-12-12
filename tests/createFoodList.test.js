import { printFoodList } from '../js/printFoodList.js';
import { mockFoodData } from './fixtures/mockFoodData.js';

describe('test printFoodList method', () => {
  test('it adds <li> to ul list', () => {
    document.body.innerHTML = '<ul class="restaurant__food-list"></ul>';

    const arrFood = mockFoodData;

    printFoodList(arrFood);
    const list = document.querySelector('ul');

    expect(list.length).not.toBe(arrFood.length);
  });

  test('don\'t create new li without node argument', () => {
    expect(() => {
      printFoodList();
    }).toThrow();
  });
});

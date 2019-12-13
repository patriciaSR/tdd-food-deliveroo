import { printFoodList } from '../js/printFoodList.js';
import { mockFoodData } from './fixtures/mockFoodData.js';

describe('test printFoodList method', () => {
  test('it adds new <li> to the list', () => {
    document.body.innerHTML = '<ul class="restaurant__food-list"></ul>';

    const foods = mockFoodData;

    printFoodList(foods);
    const list = document.querySelector('ul');

    expect(list.length).not.toBe(foods.length);
  });

  test('it doesn\'t create new <li> without node argument', () => {
    expect(() => {
      printFoodList();
    }).toThrow();
  });
});

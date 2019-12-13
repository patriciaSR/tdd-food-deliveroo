import { printFoodInCart } from '../js/printFoodInCart.js';
import { mockFoodData } from './fixtures/mockFoodData.js';

import { listElements } from './fixtures/mockVariables';

import * as updateCounterModule from '../js/updateCounterFood.js';
import * as updateTotalPriceModule from '../js/updateTotalPrice.js';

describe('printFoodInCart method', () => {
  beforeEach(() => {
    jest.mock('../js/updateCounterFood.js');
    jest.mock('../js/updateTotalPrice.js');

    document.body.innerHTML = `
    <span></span>
    <ol class="shopping-cart__list">${listElements}</ol>
  `;
  });

  afterEach(() => {
    jest.resetModules();
  });

  const mockedListElement = document.createElement('li');
  const mockedBtnElement = document.createElement('button');
  mockedListElement.appendChild(mockedBtnElement);

  test('it adds a <li> to <ol> cart list', () => {
    printFoodInCart(mockedListElement);
    const cartList = document.querySelector('ol');
    const cartListItem = document.querySelector('li');

    expect(cartList.innerHTML.length).not.toBe(0);
    expect(cartListItem.tagName).toBe('LI');
  });

  test('it adds 2 btns and 1 counter to new <li> in <ol> cart list', () => {
    printFoodInCart(mockedListElement);
    const addBtn = document.querySelector('.food__add-btn');
    const removeBtn = document.querySelector('.food__remove-btn');
    const counter = document.querySelector('.food__counter');

    expect(addBtn.textContent).toBe('+');
    expect(removeBtn.textContent).toBe('-');
    expect(counter.textContent).toBe('2');
  });

  test('it adds 2 addEventListener to addBtn and removeBtn in cart elements', () => {
    const spyUpdateCounter = jest.spyOn(updateCounterModule, 'updateCounterFood');
    spyUpdateCounter.mockImplementation(() => {});

    const spyUpdateTotalPrice = jest.spyOn(updateTotalPriceModule, 'updateTotalPrice');
    spyUpdateTotalPrice.mockImplementation(() => {});

    printFoodInCart(mockedListElement, mockFoodData[0]);
    const addBtn = document.querySelector('.food__add-btn');
    const removeBtn = document.querySelector('.food__remove-btn');

    addBtn.click();

    expect(spyUpdateCounter).toHaveBeenCalled();
    expect(spyUpdateTotalPrice).toHaveBeenCalled();

    removeBtn.click();

    expect(spyUpdateCounter).toHaveBeenCalled();
    expect(spyUpdateTotalPrice).toHaveBeenCalled();
  });
});

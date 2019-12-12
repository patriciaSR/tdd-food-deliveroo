import { printFoodInCart } from '../js/printFoodInCart.js';

import { listElements } from './fixtures/mockVariables';

describe('printFoodInCart method', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <span></span>
    <ol class="shopping-cart__list">${listElements}</ol>
  `;
  });

  const mockedListElement = document.createElement('li');
  const mockedBtnElement = document.createElement('button');
  mockedListElement.appendChild(mockedBtnElement);

  test('it add a <li> to <ol> cart list', () => {
    printFoodInCart(mockedListElement);
    const cartList = document.querySelector('ol');
    const cartListItem = document.querySelector('li');

    expect(cartList.innerHTML.length).not.toBe(0);
    expect(cartListItem.tagName).toBe('LI');
  });

  test('it add 2 btns and 1 counter to new <li> in <ol> cart list', () => {
    printFoodInCart(mockedListElement);
    const addBtn = document.querySelector('.food__add-btn');
    const removeBtn = document.querySelector('.food__remove-btn');
    const counter = document.querySelector('.food__counter');

    expect(addBtn.textContent).toBe('+');
    expect(removeBtn.textContent).toBe('-');
    expect(counter.textContent).toBe('2');
  });
});

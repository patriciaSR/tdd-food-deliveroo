import { addToCart } from '../js/addToCart.js';
import { mockFoodData } from './fixtures/mockFoodData.js';
import { findFoodInCart } from '../js/findFoodInCart.js';
import { printFoodInCart, updateCounterFood } from '../js/updateCart.js';

import * as updateTotalModule from '../js/updateTotal.js';
import * as findFood from '../js/findFoodInCart.js';
import * as updateCartModule from '../js/updateCart.js';

const idArray = ["1a", "2b", "3c", "4b", "5d"];

describe('test addToCart method', () => {
  beforeEach(() => {
    document.body.innerHTML = `<ol class="shopping-cart__list">
      <li id ="1a">
        <p class="food__counter">1</p>
      </li>
    </ol>`;
  });
  const newLi = document.createElement('li');
  newLi.id = '1a';
  const newBtn = document.createElement('button');
  newLi.appendChild(newBtn);

  const mockEvent = {
    target: {
      parentElement: newLi,
    },
    price: 13.5,
  };

  test('should recieve an event and get the object id', () => {
    const spyfindFoodFn = jest.spyOn(findFood, 'findFoodInCart');

    addToCart(mockEvent, mockFoodData);

    expect(spyfindFoodFn).toHaveBeenCalled();
    expect(spyfindFoodFn).toHaveBeenCalledWith('1a', expect.any(Array));
  });

  test('should update price when called', () => {
    const spyUpdateTotalFn = jest.spyOn(updateTotalModule, 'updateTotal');

    addToCart(mockEvent, mockFoodData);

    expect(spyUpdateTotalFn).toHaveBeenCalled();
    expect(spyUpdateTotalFn).toHaveBeenCalledWith(mockEvent.price);
  });

  test('shoud check if the printFoodInCart has been called when item is not on cartArray', () => {
    const spyPrintFoodInCart = jest.spyOn(updateCartModule, 'printFoodInCart');

    const mockArray = ['1b'];

    addToCart(mockEvent, mockFoodData, mockArray);

    expect(spyPrintFoodInCart).toHaveBeenCalled();
    expect(spyPrintFoodInCart).toHaveBeenCalledWith(expect.any(Node), mockArray);
  });
});

describe('findFoodInCart method', () => {
  beforeEach(() => {
    document.body.innerHTML = `<ol class="shopping-cart__list">
      <li id ="1a">
        <p class="food__counter">1</p>
      </li>
    </ol>`;
  });

  test('if ID is in the cart it returns true', () => {
    const result = findFoodInCart('1a', idArray);

    expect(result).toBeTruthy();
  });

  test('it ID is not in the cart it returns false', () => {
    const result = findFoodInCart('34rg', idArray);

    expect(result).toBeFalsy();
  });
});

describe('printFoodInCart method', () => {
  beforeEach(() => {
    document.body.innerHTML = `<ol class="shopping-cart__list">
    </ol>`;
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
    expect(counter.textContent).toBe('1');
  });
});

describe('updateCounter method', () => {
  beforeEach(() => {
    document.body.innerHTML = `<ol class="shopping-cart__list">
    <li id ="1a">
      <p class="food__counter">2</p>
    </li>
  </ol>`;
  });

  test('it adds 1 to counter text', () => {
    updateCounterFood('1a', 'sum');
    const newCounter = document.querySelector('.food__counter');

    expect(newCounter.textContent).toBe('3');
  });

  test('it removes 1 to counter text', () => {
    updateCounterFood('1a', 'rest');
    const newCounter = document.querySelector('.food__counter');

    expect(newCounter.textContent).toBe('1');
  });

  test('it removes element in cart if counter text is cero', () => {
    const mockArr = ['1a'];
    updateCounterFood('1a', 'rest', mockArr);
    updateCounterFood('1a', 'rest', mockArr);

    const cartListItem = document.getElementById('1a');

    expect(cartListItem).toBe(null);
  });
});

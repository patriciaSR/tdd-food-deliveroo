import { addToCart } from '../js/addToCart.js';
import { findFoodInCart } from '../js/findFoodInCart.js';
import { printFoodInCart, updateCounterFood } from '../js/updateCart.js';

import * as updateTotalModule from '../js/updateTotal.js';
import * as findFood from '../js/findFoodInCart.js';
import * as updateCartModule from '../js/updateCart.js';

const idArray = ["a", "b", "c", "d", "e"];

function prepareDOM() {
  const listElements = idArray.map((id) => `
    <li id ="${id}">
      <button>Click me!</button>
      <p class="food__counter">2</p>
    </li>
  `).join('');

  document.body.innerHTML = `
    <span></span>
    <ol class="shopping-cart__list">${listElements}</ol>
  `;
}

describe('test addToCart method', () => {
  let mockEvent;

  beforeEach(() => {
    prepareDOM();

    mockEvent = {
      target: {
        parentElement: document.querySelector(`li#${idArray[0]}`),
      },
      price: 13.5,
    };
  });

  test('should recieve an event and get the object id', () => {
    const spyfindFoodFn = jest.spyOn(findFood, 'findFoodInCart');
    const id = idArray[0];
    const mockFoodData = [{
      id,
      price: 13.5,
    }];
    const mockCart = {
      products: [id],
      total: 0,
    };

    addToCart(mockEvent, mockFoodData, mockCart);

    expect(spyfindFoodFn).toHaveBeenCalled();
    expect(spyfindFoodFn).toHaveBeenCalledWith(id, mockCart.products);
  });

  test('should update price when called', () => {
    const id = idArray[0];
    const mockFoodData = [{
      id,
      price: 13.5,
    }];
    const mockCart = {
      products: [id],
      total: 0,
    };
    const spyUpdateTotalFn = jest.spyOn(updateTotalModule, 'updateTotal');

    addToCart(mockEvent, mockFoodData, mockCart);

    expect(spyUpdateTotalFn).toHaveBeenCalled();
    expect(spyUpdateTotalFn).toHaveBeenCalledWith(mockEvent.price, mockCart, 'sum');
  });

  test('shoud check if the printFoodInCart has been called when item is not on cartArray', () => {
    const id = idArray[0];
    const mockFoodData = [{
      id: 'dddd',
      price: 13.5,
    }];
    const spyPrintFoodInCart = jest.spyOn(updateCartModule, 'printFoodInCart');
    const mockCart = {
      products: [id],
      total: 0,
    };

    addToCart(mockEvent, mockFoodData, mockCart);

    expect(spyPrintFoodInCart).not.toHaveBeenCalled();
  });
});

describe('findFoodInCart method', () => {
  beforeEach(() => {
    prepareDOM();
  });

  test('if ID is in the cart it returns true', () => {
    const id = idArray[0];
    const result = findFoodInCart(id, idArray);

    expect(result).toBeTruthy();
  });

  test('it ID is not in the cart it returns false', () => {
    const result = findFoodInCart('34rg', idArray);

    expect(result).toBeFalsy();
  });
});

describe('printFoodInCart method', () => {
  beforeEach(() => {
    prepareDOM();
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

describe('updateCounter method', () => {
  beforeEach(() => {
    prepareDOM();
  });

  test('it adds 1 to counter text', () => {
    const id = idArray[0];
    updateCounterFood(id, 'sum');
    const newCounter = document.querySelector('.food__counter');

    expect(newCounter.textContent).toBe('3');
  });

  test('it removes 1 to counter text', () => {
    const id = idArray[0];
    updateCounterFood(id, 'rest');
    const newCounter = document.querySelector('.food__counter');

    expect(newCounter.textContent).toBe('1');
  });

  test('it removes element in cart if counter text is cero', () => {
    const id = idArray[0];
    const mockCart = {
      products: [id],
      total: 0,
    };
    updateCounterFood(id, 'rest', mockCart);
    updateCounterFood(id, 'rest', mockCart);

    const cartListItem = document.getElementById(id);

    expect(cartListItem).toBe(null);
  });
});

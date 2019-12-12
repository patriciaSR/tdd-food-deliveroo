import { addToCart } from '../js/addToCart.js';

import { mockIdsArray, listElements } from './fixtures/mockVariables';

import * as updateTotalPriceModule from '../js/updateTotalPrice.js';
import * as findFoodModule from '../js/findFoodInCart.js';
import * as printCartModule from '../js/printFoodInCart.js';

describe('test addToCart method', () => {
  let mockEvent;

  beforeEach(() => {
    document.body.innerHTML = `
    <span></span>
    <ol class="shopping-cart__list">${listElements}</ol>
  `;

    mockEvent = {
      target: {
        parentElement: document.querySelector(`li#${mockIdsArray[0]}`),
      },
      price: 13.5,
    };
  });

  test('it should recieve an event and get the object id', () => {
    const spyfindFoodFn = jest.spyOn(findFoodModule, 'findFoodInCart');
    const id = mockIdsArray[0];
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

  test('it should update price when called', () => {
    const id = mockIdsArray[0];
    const mockFoodData = [{
      id,
      price: 13.5,
    }];
    const mockCart = {
      products: [id],
      total: 0,
    };
    const spyUpdateTotalFn = jest.spyOn(updateTotalPriceModule, 'updateTotalPrice');

    addToCart(mockEvent, mockFoodData, mockCart);

    expect(spyUpdateTotalFn).toHaveBeenCalled();
    expect(spyUpdateTotalFn).toHaveBeenCalledWith(mockEvent.price, mockCart, 'sum');
  });

  test('it should check if the printFoodInCart has been called when item is not on cartArray', () => {
    const id = mockIdsArray[0];
    const mockFoodData = [{
      id,
      price: 13.5,
    }];
    const spyPrintFoodInCart = jest.spyOn(printCartModule, 'printFoodInCart');
    const mockCart = {
      products: ['aaaa'],
      total: 0,
    };

    addToCart(mockEvent, mockFoodData, mockCart);

    expect(spyPrintFoodInCart).toHaveBeenCalled();
  });
});

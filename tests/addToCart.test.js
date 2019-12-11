import { addToCart } from '../js/addToCart.js';
import { mockFoodData } from './fixtures/mockFoodData.js';
import { findFoodInCart } from '../js/findFoodInCart.js';


import * as updateTotalModule from '../js/updateTotal.js';
import * as findFood from '../js/findFoodInCart.js';

const idArray = ["1a", "2b", "3c", "4b", "5d"];

describe('test addToCartTest method', () => {
  const mockEvent = mockFoodData[0];

  test('should recieve an event and get the object id', () => {
    
    const spyFindFoodFn = jest.spyOn(findFood, 'findFoodInCart');

    addToCart(mockEvent, mockFoodData);

    expect(spyFindFoodFn).toHaveBeenCalled();
    expect(spyFindFoodFn).toHaveBeenCalledWith(mockEvent.id, expect.any(Array));

  });

  test('should update price when called', () => {    
    const spyUpdateTotalFn = jest.spyOn(updateTotalModule, 'updateTotal');

    addToCart(mockEvent, mockFoodData);

    expect(spyUpdateTotalFn).toHaveBeenCalled();
    expect(spyUpdateTotalFn).toHaveBeenCalledWith(mockEvent.price);
  }); 
});

describe('findFoodInCart method', () => {
  test('if ID is in the cart it returns true', () => {

    const result = findFoodInCart("1a", idArray);

    expect(result).toBeTruthy();
  });

  test('it ID is not in the cart it returns false', () => {
    const result = findFoodInCart("34rg", idArray);

    expect(result).toBeFalsy();
  });
});

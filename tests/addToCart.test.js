import { addToCart } from '../js/addToCart.js';
import { mockFoodData } from './fixtures/mockFoodData.js';


import * as updateTotalModule from '../js/updateTotal.js';
import * as findFood from '../js/findFoodInCart.js';

describe('test addToCartTest method', () => {
  const mockEvent = mockFoodData[0];
  
  test('should recieve an event and get the object id', () => {
    
    const spyFindFoodFn = jest.spyOn(findFood, 'findFoodInCart');

    addToCart(mockEvent, mockFoodData);

    expect(spyFindFoodFn).toHaveBeenCalled();
    expect(spyFindFoodFn).toHaveBeenCalledWith(mockEvent.id);

  });

  test('should update price when called', () => {    
    const spyUpdateTotalFn = jest.spyOn(updateTotalModule, 'updateTotal');

    addToCart(mockEvent, mockFoodData);

    expect(spyUpdateTotalFn).toHaveBeenCalled();
    expect(spyUpdateTotalFn).toHaveBeenCalledWith(mockEvent.price);
  }); 
  
});

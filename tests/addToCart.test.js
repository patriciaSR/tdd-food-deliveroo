import { addToCart } from '../js/addToCart.js';
import { mockFoodData } from './fixtures/mockFoodData.js';
import { findFoodInCart } from '../js/findFoodInCart.js';


import * as updateTotalModule from '../js/updateTotal.js';
import * as findFood from '../js/findFoodInCart.js';
import * as updateCartModule from '../js/updateCart.js';

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

  test('shoud check if the updateCart has been called on true', () => {

    const spyUpdateCart = jest.spyOn(updateCartModule, 'updateCart');

    addToCart(mockEvent, mockFoodData);

    expect(spyUpdateCart).toHaveBeenCalled();
    expect(spyUpdateCart).toHaveBeenCalledWith(true, mockEvent);

 });

//  test('should send false if mockEvent does not exist', () => {
//   const spyUpdateCart = jest.spyOn(updateCartModule, 'updateCart');
//   const mockedElement = {
//     "id": "90ff",
//     "name": "Pizza",
//     "price": 8.30,
//     "description": "Con todo el sabor de italia directo a tu casa",
//     "image": "https://www.africanbites.com/wp-content/uploads/2019/10/IMG_1636-2-500x500.jpg",
//     "ingredients": [
//       "base de trigo sarraceno",
//       "tomate",
//       "queso",
//       "albahaca",
//       "aceitunas"
//     ]
//   };

//     addToCart(mockedElement, mockFoodData);

//     expect(spyUpdateCart).toHaveBeenCalled();
//     expect(spyUpdateCart).toHaveBeenCalledWith(false, mockedElement);
//  });
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



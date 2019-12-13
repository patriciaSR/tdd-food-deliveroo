import { findFoodInCart } from '../js/findFoodInCart.js';

import { mockIdsArray, listElements } from './fixtures/mockVariables';

describe('findFoodInCart method', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <span></span>
    <ol class="shopping-cart__list">${listElements}</ol>
  `;
  });

  test('if ID is in the cart it returns true', () => {
    const id = mockIdsArray[0];
    const result = findFoodInCart(id, mockIdsArray);

    expect(result).toBeTruthy();
  });

  test('it ID is not in the cart it returns false', () => {
    const result = findFoodInCart('34rg', mockIdsArray);

    expect(result).toBeFalsy();
  });
});

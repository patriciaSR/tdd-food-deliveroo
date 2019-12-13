import { updateCounterFood } from '../js/updateCounterFood.js';

import { mockIdsArray, listElements } from './fixtures/mockVariables.js';

describe('updateCounter method', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <span></span>
    <ol class="shopping-cart__list">${listElements}</ol>
  `;
  });

  test('it adds 1 to counter text', () => {
    const id = mockIdsArray[0];
    updateCounterFood(id, 'sum');
    const newCounter = document.querySelector('.food__counter');

    expect(newCounter.textContent).toBe('3');
  });

  test('it removes 1 to counter text', () => {
    const id = mockIdsArray[0];
    updateCounterFood(id, 'rest');
    const newCounter = document.querySelector('.food__counter');

    expect(newCounter.textContent).toBe('1');
  });

  test('it removes element in cart if counter text is cero', () => {
    const id = mockIdsArray[0];
    const mockCart = {
      products: [id],
      total: 0,
    };
    updateCounterFood(id, 'rest', mockCart);
    updateCounterFood(id, 'rest', mockCart);

    const cartListItem = document.getElementById(id);

    expect(cartListItem).toBe(null);
  });

  test('it does nothing when the element is not in the cart', () => {
    const id = 'lalala';
    const mockCart = {
      products: [id],
      total: 0,
    };

    const result = updateCounterFood(id, 'sum', mockCart);

    expect(result).toBe(undefined);
  });
});

import { updateTotal } from '../js/updateTotal.js';

function getTotal() {
  return parseFloat(document.querySelector('span').textContent);
}

describe('updateTotal method', () => {
  const IVA = 0.21;

  beforeEach(() => {
    document.body.innerHTML = '<span></span>';
  });

  test('it renders the total with IVA if the cart is empty', () => {
    updateTotal(10, { total: 0 }, 'sum');

    expect(getTotal()).toBe(12.1);
  });

  test('it renders the total with IVA if the cart is not empty', () => {
    updateTotal(10, { total: 10 }, 'sum');

    expect(getTotal()).toBe(24.2);
  });

  test('it renders the total with IVA if an amount is substracted', () => {
    updateTotal(10, { total: 10 });

    expect(getTotal()).toBe(0);
  });

  test('it should only allow numbers', () => {
    expect(() => {
      updateTotal('seventeen', { total: 0 }, 'sum');
    }).toThrowError(new Error('Not a valid format'));
  });
});

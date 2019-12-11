import { updateTotal } from '../js/updateTotal.js';


describe('updateTotal method', () => {
  const IVA = 0.21;
  const mockPrice = 10;
  const mockPrice2 = -20;
  const total = 50;

  test('it should add and update the total count of the checkout list', () => {
    const expected = (total + mockPrice) * IVA;
    const result = updateTotal(mockPrice, total, 'sum');

    expect(result).toBe(expected);
  });

  test('it should add and update the total count of the checkout list', () => {
    const expected = (total - mockPrice) * IVA;
    const result = updateTotal(mockPrice, total, 'rest');

    expect(result).toBe(expected);
  });

  test('it should not allow negative numbers', () => {
    const expected = (total + mockPrice2) * IVA;
    const result = updateTotal(mockPrice2, total, 'sum');

    expect(result).toBe(expected);
  });

  test('it should only allow numbers', () => {
    expect(() => {
      updateTotal('seventeen', total, 'sum');
    }).toThrowError(new Error('Not a valid format'));
  });
});

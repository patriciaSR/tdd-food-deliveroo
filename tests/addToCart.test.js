import { addToCart, counter } from '../js/addToCart.js';

describe('test addToCartTest method', () => {
  test('it adds ++ to counter', () => {
    document.body.innerHTML = '<ol class="shopping-cart__list"></ol>';

    addToCart();

    expect(counter).toBe(1);

    addToCart();

    expect(counter).toBe(2);
  });

  // test('don\'t create new li without node argument', () => {
  //   expect(() => {
  //     createFoodList();
  //   }).toThrow();
  // });
});

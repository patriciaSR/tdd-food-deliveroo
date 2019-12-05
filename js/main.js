'use strict';

import { getFoodsData } from './getFoodsData.js';
import { createFoodList } from './createFoodList.js';
import { addToCart } from './addToCart.js';

const ENDPOINT = 'js/service/foodData.json';

getFoodsData(ENDPOINT)
  .then((data) => {
    createFoodList(data);
  });

addToCart();

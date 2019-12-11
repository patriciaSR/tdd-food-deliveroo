'use strict';

import { getFoodsData } from './getFoodsData.js';
import { createFoodList } from './createFoodList.js';
import { addToCart } from './addToCart.js';

const ENDPOINT = 'js/service/foodData.json';

let foodData = [];

getFoodsData(ENDPOINT)
  .then((data) => {
    createFoodList(data);
    foodData = data;
  });

export { foodData };

'use strict';

import { getFoodsData } from './getFoodsData.js';
import { createFoodList } from './createFoodList.js';

const ENDPOINT = 'js/service/foodData.json';

getFoodsData(ENDPOINT)
  .then((data) => {
    createFoodList(data);
  });

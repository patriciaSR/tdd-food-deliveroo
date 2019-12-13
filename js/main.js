'use strict';

import { getFoodsData } from './getFoodsData.js';
import { printFoodList } from './printFoodList.js';

const ENDPOINT = 'js/service/foodData.json';

getFoodsData(ENDPOINT)
  .then((data) => {
    printFoodList(data);
  });

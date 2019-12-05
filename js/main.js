'use strict';

import { getFoodsData } from "./getFoodsData.js";
import { createFoodCard } from './createFoodCard.js';

const ENDPOINT = "js/service/foodData.json";

getFoodsData(ENDPOINT);
createFoodCard();
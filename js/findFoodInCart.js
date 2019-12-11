const idArray = [];


function findFoodInCart(idEvent, foodIdArray){
    return foodIdArray.includes(idEvent);
};

export { findFoodInCart };
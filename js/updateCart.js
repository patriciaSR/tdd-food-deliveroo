const idArray = ["1a", "2b", "3c", "4b", "5d"];


function updateCart(bool, element) {
    if(bool) {
      updateCounterFood(element.id, 'sum');
    } else {
      idArray.push(element.id);
      printFoodInCart(element);
      
    };
  };

  function updateCounterFood(id, action) {
  
};

function printFoodInCart(element) {
  
};

export { updateCart, updateCounterFood, printFoodInCart };
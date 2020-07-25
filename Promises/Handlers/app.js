const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

//handler functions
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
}

//invoking checkInventory with order
//that returns a promise
//attaching then with the two handlers
checkInventory(order).then(handleSuccess, handleFailure);


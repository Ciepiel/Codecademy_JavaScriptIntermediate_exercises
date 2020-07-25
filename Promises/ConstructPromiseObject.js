const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

//function with no parameters, return a new promise
//by passing myExecutor() into the Promise constructor
const orderSunglasses = () => {
    return new Promise(myExecutor);
};

//var with returned vlue of orderSunglasses
const orderPromise = orderSunglasses();

console.log(orderPromise);                      
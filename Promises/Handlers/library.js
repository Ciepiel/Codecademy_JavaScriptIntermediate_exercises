const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

//checkInventory() takes in an array representing an order and returns a promise
const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      //used setTimeout() to ensure that the checkInventory() promise settles asynchronously
        setTimeout(() => {
          //checks if every item is in stock
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

module.exports = { checkInventory };
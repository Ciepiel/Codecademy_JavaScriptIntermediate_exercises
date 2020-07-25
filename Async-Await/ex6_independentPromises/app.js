let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

//async function serveDinner containing indepenedent
//promises with parts of the meal
async function serveDinner() {
  //var assigned to the promises objects
  //not their resolved values
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  //logging  string result to the console
  //with each promise awaiting
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();



let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// asyncs function with an array of promises
async function serveDinnerAgain(){
  //var storing the resolved value of the promise
  //returned from Promise.all() which takes in
  //an array of promises
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  //logging a string with items in order from the array
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

serveDinnerAgain()


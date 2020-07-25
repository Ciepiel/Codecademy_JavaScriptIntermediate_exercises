const shopForBeans = require('./library.js');

//async precedes the function
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  //captures the resolved value of the promise returned
  //when invoke shopForBeans()
  /*The promise returned from shopForBeans() prints a 
  string- check library.js, line 11 */
  let value = await shopForBeans();
  //await precedes a promise in order to log the promise
  //returned from shopForBeans() first
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();


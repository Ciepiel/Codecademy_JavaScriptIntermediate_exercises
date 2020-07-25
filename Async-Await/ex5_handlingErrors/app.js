const cookBeanSouffle = require('./library.js');

// Writing an async function with try..catch statement
async function hostDinnerParty() {
  try {
    //var assigned to the resolved value of the promise
    let dinner = await cookBeanSouffle();
    //logging a string with rresolved value of bookBeanSouffle
    console.log(`${dinner} is served!`);
  }
  //catch statement specifies an identifier- error
  //error returns a string for rejection of the 
  //cookBeanSouffle promise
  catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
 }

 hostDinnerParty();






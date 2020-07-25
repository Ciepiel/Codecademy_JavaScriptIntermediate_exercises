const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// async function to handle 3 dependent promises
async function makeBeans() {
  //var storing resolved value of shopForBeans promise
  const type = await shopForBeans();
  //var storing resolved value of soakTheBeans promise
  //that function expects an argument
  let isSoft = await soakTheBeans(type);
  //var storing resolved value of cookTheBeans promise
  //that function expect an argument
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();
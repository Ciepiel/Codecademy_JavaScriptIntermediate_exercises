//using rquire() function to load a module from a different file; filepath as an argument
const Airplane = require('./1-airplane.js');
//defining a function to use the module and access the property defined within
function displayAirplane() {
  console.log(Airplane.myAirplane);
}
//calling the function
displayAirplane();
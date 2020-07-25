//using import keyword to import a module
import Airplane from './airplane';
//defining a function
function displayFuelCapacity() {
  //iterating through availableAirplanes array in the
  //Airplane object
  //anonymous function as a parameter
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

//calling the function
displayFuelCapacity();
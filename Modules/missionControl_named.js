//import statement to import variables
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane_named';

//defining a function
function displayFuelCapacity() {
  //iterating through availableAirplanes array
  //anonymous function as a parameter
 availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

//calling the function
displayFuelCapacity();

//defining a function
function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();
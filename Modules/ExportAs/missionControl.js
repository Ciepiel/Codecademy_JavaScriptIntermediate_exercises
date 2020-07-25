///import statement to import variables
//variables as aliases
import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

//defining a function
function displayFuelCapacity() {
  //iterating through availableAirplanes array
  //anonymous function as a parameter
 aircrafts.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

//calling the function
displayFuelCapacity();

//defining a function
function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) );
  });
}

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}

displayStaffStatus();
displaySpeedRangeStatus();
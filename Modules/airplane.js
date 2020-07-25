//object to set the properties on within our module
let Airplane = {};
//creating a property of Airplane object- array with objects
Airplane.availableAirplanes = [
  {
    name: "AeroJet",
    fuelCapacity: 800
  },
  {
    name: "SkyJet",
    fuelCapacity: 500
  }
];
//ES6 export of the module
export default Airplane;
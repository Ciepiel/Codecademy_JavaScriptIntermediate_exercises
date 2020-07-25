//variable with an array of objects
let availableAirplanes = [
  {
    name: "AeroJet",
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
  },
  {
    name: "SkyJet",
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
  }
];

//variable storing requirements
let flightRequirements = {
  requiredStaff: 4
};

//function to compare objects' properties from an array
//to the requirements stored in var
function meetsStaffRequirements(availableStaff, requiredStaff) {
  //condition- number of staff required
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

//exporting variables
export {availableAirplanes, flightRequirements,meetsStaffRequirements};

//exporting variables as soon as they're declared

//variable with an array of objects
export let availableAirplanes = [
  {
    name: "AeroJet",
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    name: "SkyJet",
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
  }
];

//variable storing requirements
export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

//function to compare objects' properties from an array
//to the requirements stored in var
export function meetsStaffRequirements(availableStaff, requiredStaff) {
  //condition- number of staff required
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

//function to compare objects' properties from an array
//to the requirements stored in var
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  var range = maxSpeed - minSpeed;
  //condition to check if the speed is within a range
  if (range > requiredSpeedRange) {
    return true
  } else {
    return false
  }
};



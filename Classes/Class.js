//class
class Surgeon {
    constructor(name, department) {
      this._name = name; /*prepending the key with _ means
      that it shouldn't be accessed directly */
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    //getter function to access the name property
    get name () {
      return this._name;
    }
  
    //getter function to access the department property
    get department () {
      return this._department;
    }
  
    //getter function to access the value of remaining 
    //holidays
    get remainingVacationDays () {
      return this._remainingVacationDays
    }
  
    //method to reduce the remaining vacation days property with days off 
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }    
  }
  
  //instances
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//accesing the value of name property for surgeon Curry
console.log(surgeonCurry.name);
//calling the method to verify outstanding vacation days
surgeonCurry.takeVacationDays(3);
//accessing remaining vacation days property after
//calling take vacation method and reducing the days
console.log(surgeonCurry.remainingVacationDays);


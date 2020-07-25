//parent class for subclasses Doctor and Nurse
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  //getter
  get name() {
    return this._name;
  }
  //getter
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  //method
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  //static method- might be called only directly on the class
  //it's not available for the individual instances or subclasses
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

//creating a Nurse class as a child of HospitalEmployee
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    //calling the parent's constructor method
    super(name);
    //setting non-common property of the Nurse
    this._certifications = certifications;
  }

  //getter
  get certifications() {
    return this._certifications;
  }

  //method to add a certification
  addCertification(newCertification) {
    //adds new certificate to certifications property
    this._certifications.push(newCertification);
  }
}

//creating new instance of Nurse class
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

//calling takeVacationDays method on nurseOlynyk
//it will reduce remaining days by 5 days off 
nurseOlynyk.takeVacationDays(5);

//logging the value of remaining vacation days
console.log(nurseOlynyk.remainingVacationDays);

//calling addCertification method on nurse Olynyk
nurseOlynyk.addCertification('Genetics');

console.log(nurseOlynyk.certifications);


class School {
  constructor(name, level, numberOfStudents) {
    //properties
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //getters
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //methods
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }

  //static method to pick a random teacher from an array
  static pickSubstituteTeacher(substituteTeachers) {
    const randomTeacher = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[randomTeacher];
  }

  //setter
  set numberOfStudents(newNumber) {
    if (typeof newNumber === 'number') {
      this._numberOfStudents = newNumber
    } else {
      return 'Invalid input: numberOfStudents must be set to a Number.'
    }
  }
}

//subclass - Primary School
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    //calling parent's constructor method
    super(name, 'primary', numberOfStudents);
    //remaining properties
    this._pickupPolicy = pickupPolicy;
  }

  //remaining getters
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//subclass - High School
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    //calling parent's constructor method
    super(name, 'high', numberOfStudents);
    //remaining properties
    this._sportsTeams = sportsTeams;
  }

   //remaining getters
  get sportsTeams() {
    return this._sportsTeams;
  }
}

//creating new instance for the Primary School subclass
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

//calling quickFacts on the lorraineHansbury
lorraineHansbury.quickFacts();

//calling picksubstituteTeacher with an array of 
//theachers
//static method can be called only on the parent class
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//creating new instance for the High School subclass
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

//getting the value saved to the sportTeams in alSmith
console.log(alSmith.sportsTeams);
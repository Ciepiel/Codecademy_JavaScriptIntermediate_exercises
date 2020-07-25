class Media {
  constructor(title) {
    //properties
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  //getters
  get title() {
    return this._title;
  }

  get ratings() {
    return this._ratings;
  } 

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  //methods
  //modifying checkout status- if true -> false; if false
  //-> true
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  //average rating method
  getAverageRating() {
    //calculating the sum of the numbers from ratings
    //array
    /*reduce method iterates through an array, 1st arg
    is an accumulator (sum at the current position) and
    the 2nd arg is value to add at the current position*/
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this._ratings.length;
    let averageRating = ratingsSum / lengthOfArray;
    return averageRating;
  }

  //add rating method- pushes the rating arg to the array
  addRating(rating) {
    this._ratings.push(rating);
  }

  //setter
  set isCheckedOut(checkout) {
    this._isCheckedOut = checkout;
  }
}

//subclass- Book
class Book extends Media {
  constructor(title, author, pages) {
    //calling the parent's constructor method
    super(title);
    //remaining properties
    this._author = author;
    this._pages = pages;
  }

  //getters not inherited from the parent's class
  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

//subclass- Movie
class Movie extends Media {
  constructor(title, director, runTime) {
    //calling the parent's constructor method
    super(title);
    //remaining properties
    this._director = director;
    this._runTime = runTime;
  }

  //getters not inherited from the parent's class
  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

//creating new instance for the Book subclass
const historyOfEverything = new Book('A SHort History of Nearly Everything', 'Bill Bryson', 544);

//calling toggleCheckOutStatus on historyOfEverything
historyOfEverything.toggleCheckOutStatus();

//logging the value of isCheckedOut property of
//historyOfEverything
console.log(historyOfEverything.isCheckedOut);

//adding ratings to historyOfEverything
historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);

//verifying average rating
console.log(historyOfEverything.getAverageRating());

//creating new instance for the Movie subclass
const speed = new Movie('Speed', 'Jan de Bont', 116);

//calling toggleCHeckOutStatus on Speed
speed.toggleCheckOutStatus();

//logging the value of isCheckedOut property of speed
console.log(speed.isCheckedOut);

//adding ratings to Speed
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

//verifying average rating
console.log(speed.getAverageRating());
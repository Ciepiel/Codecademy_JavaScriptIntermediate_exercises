//setting the module as an object
module.exports = {
  //property 1
  myAirplane: "CloudJet",
  //property 2- anonymous function to get myAirplane val
  displayAirplane: function() {
    return this.myAirplane;
  }
};
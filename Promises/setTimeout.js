console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

//setTimeOut- Node API that uses callback functions
//to schedule tasks to be performed
const usingSTO = () => {
  console.log("This line of code will log to the console last.");
};
setTimeout(usingSTO, 100);
//sto causes the daly, so this is printed laast

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
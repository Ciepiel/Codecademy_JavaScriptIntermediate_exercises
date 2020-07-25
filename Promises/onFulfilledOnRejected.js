/*prom is a promise which will randomly either resolve with 'Yay!'
or reject with 'Ohhh noooo!' */
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

//handler functions
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

/*We pass two handler functions to .then(). The first will be invoked with 'Yay!' 
if the promise resolves, and the second will be invoked with 
'Ohhh noooo!' if the promise rejects. */
prom.then(handleSuccess, handleFailure);
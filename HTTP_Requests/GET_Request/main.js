//XMLHttpRequest object is used to create and send requests
//new instance of an object saved in a variable
const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';

//setting responseType property of xhr
xhr.responseType = 'json';

//event handler (onreadystatechange) set to
//anonymous arrow function
//later on will contain an event listener which will
//execute when readyState property changes
xhr.onreadystatechange = () => {
  //conditional to check if the request is finished
  if (xhr.readyState === XMLHttpRequest.DONE) {
    //returning the response property of xhr
    //it will contain data that we're getting from the request
    return xhr.response;
  }
};

//calling the .open() method to create a new request
//the arguments passed in determine the type and URL
xhr.open('GET', url);
//calling the .send() method to send an object
xhr.send();
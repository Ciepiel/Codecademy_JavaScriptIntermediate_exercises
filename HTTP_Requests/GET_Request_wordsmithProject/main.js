// Information to reach API
//url to direct the request
const url = 'https://api.datamuse.com/words?';
//variable with the start of a parameter for the query string
//this parameter will narrow search to words that rhyme
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  //inputField.value grabs the input from the field and
  //assigns it to the variable wordQuery
  const wordQuery = inputField.value;
  //var storing the value of the entire URL and query
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  //creating new xhr object
  const xhr = new XMLHttpRequest();
  //data sent back in json format
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  //this method call will create a new request using
  //two arguments
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

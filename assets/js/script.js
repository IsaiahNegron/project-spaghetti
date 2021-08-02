//<<<<<<< HEAD
//hello world
//=======
//Variables for search card
var movieFormEl = document.querySelector("#movie-search-form");
var movieInputEl = document.querySelector("#movie-name");

//Function to search
var formSubmitHandler = function(event){
    event.preventDefault();
    movieFormEl.addEventListener("submit",formSubmitHandler);
    console.log("event");
}
//Api Fetch Functionality
var searchMovies = function () {
    fetch("http://www.omdbapi.com/?apikey=76cc10c6&").then (function(response){
        
    });
}
//Search engine code

//In order to integrate functionality within the application, we must create
//containers in HTML and then pair the ideas with JS variables.








//api fetch
//>>>>>>> 3a161bc3bba70f66410208aa33a9e2cf25c08ee2

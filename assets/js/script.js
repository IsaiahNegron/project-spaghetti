
//Variables for search card
var apiUrl = "http://www.omdbapi.com/?t=" + title + "&apikey=76cc10c6";

fetch("apiUrl")
    .then(response => response.json())
    .then(data => console.log(data));

//Function to search
var formSubmitHandler = function(event){
    event.preventDefault();
    movieFormEl.addEventListener("submit",formSubmitHandler);
    console.log("event");
}
//Api Fetch Functionality






//api fetch
//>>>>>>> 3a161bc3bba70f66410208aa33a9e2cf25c08ee2

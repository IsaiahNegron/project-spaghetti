//Variables
var movieInputEl = document.querySelector("#search-btn");
var searchTermEl = document.querySelector("#search-input");
var movieTitleContainer = document.querySelector ("#movie-details");
var movieTitleText = document.querySelector ("#movie-title")
var moviePlotContainer = document.querySelector("#movie-plot");
var movieName = searchTermEl.value.trim();



//this is the button function!!
var formSubmitHandler = function(event) {
    //Prevents page from refreshing
    event.preventDefault();
    // get value from input element
    console.log(event.target);

var movieName = searchTermEl.value.trim();
console.log(movieName);
    if (movieName) {getMovies(movieName); //change this to movie
    movieInputEl.value = "";
    } else {
    alert("Please enter a real movie!");
    }
}
//button event listener
movieInputEl.addEventListener("click", formSubmitHandler);

var getMovies = function(title) {
    // format the OMDB api url
    var apiTitleSearch = "https://www.omdbapi.com/?t=" + title + "&plot=full&apikey=76cc10c6";

    fetch(apiTitleSearch).then(response => response.json())
    .then(data => {
      if (data.Response === "False"){
        showError("Error", data.Error)
      } else {
        document.getElementById("error").classList.add("hidden")
        displayMovieInfo(data)
      }
    })
    .catch(function(error) {
      showError("Error", "Cant Connect To Server")
     });


};

var displayMovieInfo = function (data){
  
  document.getElementById('movie-title').textContent = data.Title
  document.getElementById("movie-plot-text").textContent = data.Plot
  document.getElementById('rating').textContent = "RATED: " + data.Rated
  document.getElementById("poster").src = data.Poster

};
var showError = function(title, message){
  document.getElementById("error").classList.remove("hidden");
  document.getElementById('error-title').textContent = title
  document.getElementById('error-message').textContent = message

};



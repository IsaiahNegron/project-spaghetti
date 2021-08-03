//Search engine code
var movieInputEl = document.querySelector("#search-btn");
var searchTermEl = document.querySelector("#search-input");
var movieContainerEl = document.querySelector("#movie-container");

//Search engine code


//this is the button function!!
var formSubmitHandler = function(event) {
event.preventDefault();
// get value from input element
console.log(event.target);
var movieName = searchTermEl.value.trim();
console.log(movieName);
if (movieName) {
getMovies(movieName); //change this to movie
movieInputEl.value = "";
} else {
  alert("Please enter a real movie!");
}
}

//button event listener
movieInputEl.addEventListener("click", formSubmitHandler);



var getMovies = function(title) {
    // format the OMDB api url
    var apiUrl = "https://www.omdbapi.com/?t=" + title + "&apikey=76cc10c6";

    //need to call API for plot description and Rotten Tomatoes info as well
  
    // make a request to the url
    fetch(apiUrl).then(response => response.json()).then(data => console.log(data)) 
    // request was successful
    // if (response) {
    //   console.log(data);
    //   response.json().then(function(data) {
    //     console.log(data);
    //     displayMovies(data, movie);
    //   });
    // } else {
    //   alert('Error: Movie Not Found'); //change this to text content
    // }

  .catch(function(error) {
    alert("Unable to connect to IMDB"); //change this to text content
  });
}







//make this a movie thing
var displayMovies = function(movie, searchTerm) {  //?? dont know about those parameters
    // check if api returned any repos
    if (movie.length === 0) {
      movieContainerEl.textContent = "No movies found.";
      return;
    }
    
    //clear old content
    movieContainerEl.textContent = "";
    movieSearchTerm.textContent = searchTerm;
   
   
   //might not need this for loop if we're just getting plot from OMDB
    // loop over repos
  for (var i = 0; i < movie.length; i++) {
    // format repo name
    var movieName = repos[i].owner.login + "/" + repos[i].name;
  

    
    // create a container for each movie
    var movieEl = document.createElement("a");
    movieEl.classList = "list-item flex-row justify-space-between align-center";
    movieEl.setAttribute("href", "./single-repo.html?repo=" + movieName);
    // create a span element to hold repository name
    var titleEl = document.createElement("span");
    titleEl.textContent = movieName;
  
    // append to container
    movieEl.appendChild(titleEl);
  
  // create a status element
  var statusEl = document.createElement("span");
  statusEl.classList = "flex-row align-center";
  
  
  // append to container
  repoEl.appendChild(statusEl);
  
    // append container to the dom
    repoContainerEl.appendChild(repoEl);
  }
  };











//api fetch
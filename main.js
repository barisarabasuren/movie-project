const form = document.getElementById("film-form");
const nameElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clearAll = document.getElementById("clear-films");


// Creating UI object

const ui = new UI();

//Creating Storage object

const storage = new Storage();

// Events

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",loadAllMoviesToUI);
    cardbody.addEventListener("click",deleteMovie);
    clearAll.addEventListener("click",clearAllMovies);

}

function addMovie(e) {
    const name = nameElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (name === "" || director === ""){
        //Error
        ui.displayMessage("Please complete the form.","danger");

    } else {
        // New Movie
        const newMovie = new Movie(name,director,url);

        ui.addMovieToUI(newMovie); // Add Movie to UI
        storage.addMovieToStorage(newMovie); // Add Movie to Storage
        ui.clearInputs(nameElement,directorElement,urlElement);
        ui.displayMessage("The Movie is added...","success");
    }


    e.preventDefault()
}

function loadAllMoviesToUI() {
    let movies = storage.getMoviesFromStorage();
    ui.loadAllMovies(movies);
}

function deleteMovie(e) {
    if (e.target.id === "delete-film") {
        ui.deleteMovieFromUI(e.target);
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayDeleteMessage("The movie is deleted.")
    }
}

function clearAllMovies() {

    if(confirm("Are you sure?")){
        ui.clearAllMoviesFromUI();
        storage.clearAllMoviesFromStorage();
    }
    ui.displayDeleteMessage("Movie list is deleted.")
}
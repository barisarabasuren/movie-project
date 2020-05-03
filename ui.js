function UI() {

}

UI.prototype.addMovieToUI = function(newMovie) {

    // <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    // </tr>
    const movieList = document.getElementById("films");
    movieList.innerHTML += `

            <tr>
                <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
                <td>${newMovie.name}</td>
                <td>${newMovie.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
            </tr>

    `;
}

UI.prototype.clearInputs = function(element1,element2,element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessage = function(message,type) {

    const addMovieButton = document.getElementById("add-movie-button");

    addMovieButton.innerHTML = `

    <button id="add-movie-button" type="submit" class="btn btn-${type} col-md-4">${message}</button>
    
    `;

    setTimeout(function(){
        addMovieButton.innerHTML = `

    <button id="add-movie-button" type="submit" class="btn btn-secondary col-md-4">Add Movie</button>
    
    `;
    },1000)

}

UI.prototype.loadAllMovies = function(movies) {
    const movieList = document.getElementById("films")
    movies.forEach(function(movie){
        movieList.innerHTML += `
        <tr>
            <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
            <td>${movie.name}</td>
            <td>${movie.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
        </tr>
        `;
    })
}

UI.prototype.deleteMovieFromUI = function(element) {
    element.parentElement.parentElement.remove();
}

UI.prototype.displayDeleteMessage = function(message) {
    const movieTitle = document.getElementById("movie-title");

    movieTitle.innerHTML = `
        <div class="alert alert-success col-md-12" role="alert">
        ${message}
        </div>
    `;
    setTimeout(function(){
        movieTitle.innerHTML =`
        <div class="alert alert-dark" role="alert">
            Movies
        </div>
        `;
    },2000)
}

UI.prototype.clearAllMoviesFromUI = function() {
    const movieList = document.getElementById("films");

    while(movieList.firstElementChild !== null) {
        movieList.firstElementChild.remove();
    }
}
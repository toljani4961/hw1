const numberOfFilms = +prompt("How many films have you watched so far?", []);

const personalMovieD8 = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privar: false
  };

let asdglkjasdg = prompt("один из последних просмотренніх фильмов", '');
let asdglkjasdg1 = +prompt("оцінка", '');
personalMovieD8.movies[asdglkjasdg] = asdglkjasdg1;
asdglkjasdg = prompt("один из последних просмотренніх фильмов", '');
asdglkjasdg1 = +prompt("оцінка", '');
personalMovieD8.movies[asdglkjasdg] = asdglkjasdg1;

console.log(personalMovieD8);
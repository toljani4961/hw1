let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Скільки фільмів ви дивились?", "");
    while (numberOfFilms == ' ' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Скільки фільмів ви дивились?", '2');
    }
}
start();

const personalMovieD8 = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function questionsSycle() {
    for (let i = 0; i < 1;  i++) {
        const a = prompt("один из последних просмотренніх фильмов", ''),
              b = +prompt("оцінка", '');
                // personalMovieD8.genres[a] = b;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieD8.genres[a] = b;
        console.log("done");
        // i--; 
        } else {
            const a = prompt("один из последних просмотренніх фильмов", ''),
                  b = +prompt("оцінка", '');
                  personalMovieD8.genres[a] = b;
            console.log("Repeat of a and b was initialized by Error");
        }
    }
}
questionsSycle();

function questionsSycleCheck() {
    if (personalMovieD8.count < 10) {
            console.log('просмотренно довольно мало фильмов');
        } else if (personalMovieD8.count > 10 && personalMovieD8.count < 30) {
            console.log('ви класичний користувач');
        } else if (personalMovieD8.count >= 30) {
            console.log('ви кіноман');
        } else {
            console.log('error2222');
        }
        
        while (true) {
            let repQw = confirm("Ви дивились ще якісь фільми?", "");
            if(!repQw) {
                break;
            }
            const c = prompt("один из последних просмотренніх фильмов", []),
                  d = +prompt("оцінка", ''); 
                  personalMovieD8.genres[c] = d;
        }
 }
 questionsSycleCheck();

 function showMyBD(hidden) {
     if(!hidden) {
        console.log("not hidden");
     } else {
         console.log("rivar явно true and hidden");
     }
 }
showMyBD(personalMovieD8.privat);

function writeYorGenres() {
    for( i = 1; i <= 3; i++) {
        // let qwGener = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieD8.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}
writeYorGenres();

//     // if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     //     personalMovieD8.genres[a] = b;
//     //     console.log("done");
//     //     i--;
//     // } else {
//     //     console.log("error");
//     //     // agane = a; 
//     // }

//     do {
//         const a = prompt("один из последних просмотренніх фильмов", []),
//               b = +prompt("оцінка", ''); 
//               if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieD8.genres[a] = b;
//                 console.log("done");
//                 agane++;
//             } else {
//                 console.log("error");
//                 // agane--; 
//             }
//         }
// while (agane < i);
// if (personalMovieD8.count < 10) {
//     console.log('просмотренно довольно мало фильмов');
// } else if (personalMovieD8.count > 10 && personalMovieD8.count < 30) {
//     console.log('ви класичний користувач');
// } else if (personalMovieD8.count >= 30) {
//     console.log('ви кіноман');
// } else {
//     console.log('error2222');
// }
// let repQw = confirm("Ви дивились ще якісь фільми?", "");
// if (repQw == true) {
//     const c = prompt("один из последних просмотренніх фильмов", []),
//           d = +prompt("оцінка", ''); 
//           personalMovieD8.genres[c] = d;
// }

    // if (a != null && b != null && a != '' && b != '' && a.length < 50 && b < 50) {
        // personalMovieD8.genres[a] = b;
    //     console.log('done');
    // } else {
    //     console.log('error');
    //     // i--;
    // }
// }

// if (personalMovieD8.count < 10) {
//     console.log("You watched a pretty little films");
// } else if (personalMovieD8.count >= 10 && personalMovieD8.count < 30) {
//     console.log("You are a classick watcher");
// } else if (personalMovieD8.count >= 30) { 
//     console.log("You are a move fun");
// }else {
//     console.log("Errors");
console.log(personalMovieD8);
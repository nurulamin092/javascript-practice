let movieRating = 'pg';
let age = 12;

let result;

/* if ('pg' == movieRating && age >= 13) {
    result = 'you can watch this movie';
} else if ('r' == movieRating && age >= 18) {
    result = 'you can watch this movie';
} else if ('g' == movieRating) {
    result = 'you can watch this movie';
}

else {
    result = "you can do no't watch this movie";
} */

if (('pg' == movieRating && age >= 13) || ('r' == movieRating && age >= 18) || ('g' == movieRating)) {
    result = 'you can watch this movie';
} else {
    result = "you can do no't watch this movie";
}

console.log(result);  

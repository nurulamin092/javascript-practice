//baby = 0-1; // toddler = 1-3; kids = 3-12 ; teenager = 13-18

let yourAge = 17;
let result;

if (yourAge <= 1) {
    result = ' You are a baby'
} else if (yourAge <= 3) {
    result = 'you are toddler';
} else if (yourAge <= 12) {
    result = 'kids'
} else if (yourAge < 18) {
    result = 'teenager'
} else if (yourAge >= 18) {
    result = 'adult'
}

console.log(result);
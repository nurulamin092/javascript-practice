/**
 * == equal to (দুইটাই সমান )
 * != equal to (সমান না )
 * < smaller than / less then (একটা আরেক থেকে ছোট )
 * > gater than (বড় )
 * <= (একটা আরেকটা থেকে ছোট ও হতে পারে আবার সমান  হতে পারে )
 * >= (একটা আরেকটা থেকে বড়  ও হতে পারে আবার সমান  হতে পারে)
 */

/* let n = 17;

if (n < 10) {
    console.log(n, 'this number', n, 'is smaller than 10');
} else if (n < 20) {
    console.log(n, 'this number', n, 'is smaller than 20');
}

else {
    console.log(n, 'this number', n, 'is greater than 10');
} */

// var n = 21;
// var m = 22;

// if (n >= m) {
//     console.log('n is greater than m');
// } else {
//     console.log('n is smaller than m');
// }

/* let n = 10;

if (8 == n) {
    console.log('n is equal to 8');
}
else {
    console.log('n is not equal to 8');
} */


/* 

let personOne = 'jamal';
let personTwo = 'kamal';
let thereAreBrother = true;

if ('jamal' == personOne) {
    if ('kamal' == personTwo) {
        if (thereAreBrother) {
            console.log('Jamal & Kamal Brother');
        } else {
            console.log('there are not brother');
        }
    }
}

if ('jamal' == personOne && 'kamal' == personTwo && thereAreBrother) {
    console.log('Jamal & Kamal Brother');
}
else {
    console.log('there are not brother');
} 
 */



// 2 3,5,7

let n = 18;

if (n < 10 && (2 == n || 3 == n || 5 == n || 7 == n)) {
    console.log("This number", n, "is smaller than 10 & it's a prime number ");
}
else if (n < 10) {
    console.log("This number", n, "is smaller than 10 & it's not a prime number");
}

else {
    console.log("This number", n, "is greater than 10");
}
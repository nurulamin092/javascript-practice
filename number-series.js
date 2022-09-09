//s0 = 1 2 3 4 5 6 7 8 9 ...... * linear sequence*

//s1 = 2 4 6 8 10 12 14 ....... *every number * 2 *

//s2 = 1 4 7 10 13 16 .... * start 1 and every number + 3*

//s3 = 0 3 8 15 24 35 48 ... * every number square -1 *

//s4 = 1 4 3 8 5 12 7 16 9 20 ... * এই সিরিস টা হচ্ছে বিজোড় হলে রেখে দেয়া আর জোড় হলে ২ দিয়ে গুন করা  *

//s5 = 0 1 1 2 3 5 8 13 .... * fibonacci series *


/*
s1 = 2 4 6 8 10 12 14 ....... *every number * 2 *
var series = "";
var num;

for (var i = 1; i <= 10; i++) {
    num = i * 2;
    series = series + num + " "
}

console.log(series);

*/

/*
1 4 7 10 13 16 .... * start 1 and every number + 3*
*/

/* var series = '1 ';
var num = 1;

for (var i = 1; i < 10; i++) {
    num = num + 3
    series = series + num + " ";
}
console.log(series); */

//s3 = 0 3 8 15 24 35 48 ... * every number square -1 *

/* var series = ' ';

var num = 1;

for (var i = 1; i < 10; i++) {

    num = (i * i) - 1;

    series = series + num + " ";

}

console.log("Series 3 =", series); */

//s4 = 1 4 3 8 5 12 7 16 9 20 ... * এই সিরিস টা হচ্ছে বিজোড় হলে রেখে দেয়া আর জোড় হলে ২ দিয়ে গুন করা  *

var series = ""

for (var i = 1; i <= 10; i++) {
    num = i;
    if (num % 2 == 0) {
        num = i * 2
    }
    series = series + num + " "
    console.log("Series4 =", series);

}

//s5 = 0 1 1 2 3 5 8 13 .... * fibonacci series *

var series = "0 1 ";
var num = 1;
var x = 0;
var y = 1;
for (var i = 0; i < 10; i++) {
    var num = x + y;
    x = y;
    y = num;
    series = series + num + " "
}

console.log('Series5 =', series);
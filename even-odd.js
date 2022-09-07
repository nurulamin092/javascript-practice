var n = 0;
var result;
var remainder = n % 2;
if (0 == n) {
    result = 'This is a neutral number';
}
else if (0 == remainder) {
    result = 'This number ' + n + ' is even';
}
else {
    result = 'This number ' + n + ' is odd';
}

console.log(result);
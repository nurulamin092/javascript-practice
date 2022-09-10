
var number = 144;

var range = Math.ceil(Math.sqrt(number));
var divisor = " ";
for (var i = 1; i <= range; i++) {

    if (number % i == 0) {
        if (i == number / i) {
            divisor += i + " "
        }
        else {

            divisor += i + " " + (number / i) + " ";
        }
    }
}

console.log(divisor);
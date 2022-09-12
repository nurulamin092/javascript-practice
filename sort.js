var list = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat'
];

// var list1 = ['e', 'd', 'a', 'c', 'b'];

var number = [3, 4, 2, 55, 11, 1, 32, 69, 14, 13, 22, 19];

var length = number.length - 1;

for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
        if (number[j] > number[j + 1]) {
            [number[j], number[j + 1]] = [number[j + 1], number[j]]
        }
    }
}
//number.sort((a, b) => a - b);

console.log(number)
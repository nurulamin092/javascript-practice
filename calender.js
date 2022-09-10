var monthName = "september";
var days = 31;
var statingDay = 2;

console.log('\n\nCalendar of', monthName, "\n");

console.log("sun   mon   tue   wed   thu   fri   sat");

for (var i = 0; i < 5; i++) {
    var dayRow = "";
    for (var j = 1; j <= 7; j++) {
        var currentDay = 7 * i + j - statingDay;
        if (currentDay > days) {
            break;
        } else if (currentDay < 1) {
            currentDay = " ";
        }
        else if (currentDay > 9) {
            dayRow += currentDay + "    ";
        }
        else {
            dayRow += currentDay + "     ";
        }



    }
    console.log(dayRow);
}
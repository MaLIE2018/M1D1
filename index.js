function changeContent(result, id) {
    document.getElementById(id).innerHTML = result;
}


// Excerice 1 Monday, 8.03.2021
function outputDayaTime() {
    var myDate = new Date();

    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var myDay = myDate.getDay();
    var myHour = myDate.getHours() % 12;

    // Calculating Ante meridiem – post meridiem using modulo Operator
    if (myHour > 12) {
        var currentTime = myHour + " PM : " +
            myDate.getMinutes() + " : " + myDate.getSeconds()
    } else {
        var currentTime = myHour + " AM : " +
            myDate.getMinutes() + " : " + myDate.getSeconds()
    }

    //Return weekday
    var currentWeekday = weekday[myDay];

    result = "Today is: " + currentWeekday + "<br>Current Time is: " + currentTime;

    console.log(result);

    return result;
}

changeContent(outputDayaTime(), "e1");
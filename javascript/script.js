function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDate();
    var month = today.getMonth();
    var textMonth;
    var year = today.getFullYear();
    var ampm = "am";
    var hour;

    textMonth = translateMonth(month);
    ampm = timeOfDay(h);
    m = checkTime(m);
    s = checkTime(s);
    hour = militaryToStandard(h);
    document.getElementById('txt').innerHTML =
        hour + ":" + m + ":" + s + " " + ampm + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + day + " " + textMonth + " " + year;

    var t = setTimeout(startTime, 500);
}

 function translateMonth(i){
    if(i == 0){return "January";}
    if(i == 1){return "February";}
    if(i == 2){return "March";}
    if(i == 3){return "April";}
    if(i == 4){return "May";}
    if(i == 5){return "June";}
    if(i == 6){return "July";}
    if(i == 7){return "August";}
    if(i == 8){return "September";}
    if(i == 9){return "October";}
    if(i == 10){return "November";}
    if(i == 11){return "December";}
    else{
        return "error";
    }
}

function timeOfDay(i){
    if(i >= 12)
    {
        return "PM";
    }
    else{
        return "AM";
    }
}

function militaryToStandard(i){
    if(i > 12)
    {
        return i-12;
    }
    else{
        return i;
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

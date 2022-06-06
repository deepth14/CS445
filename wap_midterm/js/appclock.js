window.onload = function(){
    "use strict";
    //setInterval(myTimer, 10);
    setInterval(myTimer1, 10);

    function myTimer1(){
        let date = new Date();
            let dateString = date.toString().split(date.getFullYear())[0].concat(date.getFullYear());
            const time = date.getHours() < 12 ? "AM" : "PM";
            let dateTimeString = dateString + " " + (
            date.getHours() > 12 ? date.getHours() % 12 : date.getHours()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+ ":" + 
            date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + 
            date.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + " " + time;
            document.getElementById("span").innerHTML = dateTimeString;
    }

 }


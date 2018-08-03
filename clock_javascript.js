function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers that are less then 10 (<10)*/
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    var t = setInterval(function(){ startTime() }, 1);


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

    if (h < 12) {
    document.body.style.backgroundImage = 'url(morning.jpeg)';
    document.getElementById("greeting") .innerText = "Good Morning";
    }

    else if (h < 18) {
        document.body.style.backgroundImage = 'url(afternoon.jpeg)';
        document.getElementById('greeting') .innerText = "Good Afternoon"

    }

    else if (h > 18) {
        document.body.style.backgroundImage = 'url(evening.jpeg';
        document.getElementById('greeting') .innerText = 'Good Evening'
    }
}


var date = new Date();
var hour = date.getHours();

if(hour > 12) {
    document.getElementById("am").innerHTML = "PM"
}

if(hour >= 10) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/window (2).png)";
    document.getElementById("dash").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"; 
    document.getElementById("morning").innerHTML = "GOOD MORNING !! WAKE UP !!";
}

if(hour >= 12) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/Afternoo.png)";
    document.getElementById("dash").innerHTML = "LETS HAVE SOME LAUNCH !!";
    document.getElementById("morning").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
}

if(hour >= 17) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/evening.png)";
    document.getElementById("dash").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("morning").innerHTML = "GOOD EVENING !!";
}

if(hour >= 21) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/night.png)";
    document.getElementById("dash").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("morning").innerHTML = "GOOD NIGHT !!"; 
}

 document.getElementById("sec").innerHTML = date.getSeconds();

setInterval(() => {
    let a = new Date();
    return document.getElementById("sec").innerHTML = a.getSeconds();
}, 1000);
setInterval(() => {
    let a = new Date();
    return document.getElementById("hour").innerHTML = a.getHours();
}, 1000);
setInterval(() => {
    let a = new Date();
    document.getElementById("minus").innerHTML = a.getMinutes();
}, 1000);

var setalarm = ()=> {
    var m = document.getElementById("timingMorning").value;
    localStorage.setItem("morning", m );

    if(localStorage.getItem("morning") === "1") {
        document.getElementById("demo1").innerHTML = "08 AM - 09 AM";
    }

    if(localStorage.getItem("morning") === "2") {
        document.getElementById("demo1").innerHTML = "09 AM - 10 AM";
    }
    if(localStorage.getItem("morning") === "3") {
        document.getElementById("demo1").innerHTML = "09 AM - 10 AM";
    }
    if(localStorage.getItem("morning") === "4") {
        document.getElementById("demo1").innerHTML = "09 AM - 10 AM";
    }

    var lauch = document.getElementById("afternoontiming").value;
    localStorage.setItem("afternoon", lauch );

    if(localStorage.getItem("afternoon") === "1") {
        document.getElementById("demo2").innerHTML = "12 PM - 01 PM";
    }

    if(localStorage.getItem("afternoon") === "2") {
        document.getElementById("demo2").innerHTML = "01 PM - 02 PM";
    }
    if(localStorage.getItem("afternoon") === "3") {
        document.getElementById("demo2").innerHTML = "02 PM - 03 PM";
    }
    if(localStorage.getItem("afternoon") === "4") {
        document.getElementById("demo2").innerHTML = "03 PM - 04 PM";
    }

    var evening = document.getElementById("evening").value;
    localStorage.setItem("evening", evening );

    if(localStorage.getItem("evening") === "1") {
        document.getElementById("demo3").innerHTML = "04 PM - 05 PM";
    }

    if(localStorage.getItem("evening") === "2") {
        document.getElementById("demo3").innerHTML = "05 PM - 06 PM";
    }
    if(localStorage.getItem("evening") === "3") {
        document.getElementById("demo3").innerHTML = "06 PM - 07 PM";
    }
    if(localStorage.getItem("evening") === "4") {
        document.getElementById("demo3").innerHTML = "07 PM - 08 PM";
    }

    var night = document.getElementById("night").value;
    localStorage.setItem("night", night );

    if(localStorage.getItem("night") === "1") {
        document.getElementById("demo4").innerHTML = "08 PM - 09 PM";
    }

    if(localStorage.getItem("night") === "2") {
        document.getElementById("demo4").innerHTML = "09 PM - 10 PM";
    }
    if(localStorage.getItem("night") === "3") {
        document.getElementById("demo4").innerHTML = "10 PM - 11 PM";
    }
    if(localStorage.getItem("night") === "4") {
        document.getElementById("demo4").innerHTML = "11 PM - 12 AM";
    }
}

setTimeout(() => {
    setalarm();
}, 100);

document.getElementById("timingMorning").value = localStorage.getItem("morning");
document.getElementById("afternoontiming").value = localStorage.getItem("afternoon");
document.getElementById("evening").value = localStorage.getItem("evening");
document.getElementById("night").value = localStorage.getItem("night");

if(localStorage.getItem("morning") == null) {
    document.getElementById("timingMorning").value = 0;
    document.getElementById("afternoontiming").value = 0;
    document.getElementById("evening").value = 0;
    document.getElementById("night").value = 0;
}













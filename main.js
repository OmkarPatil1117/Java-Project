document.querySelector("#timingMorning").addEventListener('change', ()=> {
    document.getElementById("banner").style.backgroundImage = "url(./img/window (2).png)"
    let value = document.querySelector("#timingMorning").value;
    localStorage.setItem("morning", value)
    if(value == 1 ) {
        document.querySelector("#demo1").textContent = document.querySelector("#m1").textContent;
    } else if(value == 2) {
        document.querySelector("#demo1").textContent = document.querySelector("#m2").textContent;
    } else if(value == 3) {
        document.querySelector("#demo1").textContent = document.querySelector("#m3").textContent;
    } else if(value == 4 ) {
        document.querySelector("#demo1").textContent = document.querySelector("#m4").textContent;
    }
})
document.querySelector("#afternoontiming").addEventListener('change', ()=> {
    document.getElementById("banner").style.backgroundImage = "url(./img/Afternoo.png)"
    let value = document.querySelector("#afternoontiming").value;
    localStorage.setItem("afternoon", value)
    if(value == 1 ) {
        document.querySelector("#demo2").textContent = document.querySelector("#a1").textContent;
    } else if(value == 2) {
        document.querySelector("#demo2").textContent = document.querySelector("#a2").textContent;
    } else if(value == 3) {
        document.querySelector("#demo2").textContent = document.querySelector("#a3").textContent;
    } else if(value == 4 ) {
        document.querySelector("#demo2").textContent = document.querySelector("#a4").textContent;
    }

})
document.querySelector("#evening").addEventListener('change', ()=> {
    document.getElementById("banner").style.backgroundImage = "url(./img/evening.png)"
    let value = document.querySelector("#evening").value;
    localStorage.setItem("evening", value)
    if(value == 1 ) {
        document.querySelector("#demo3").textContent = document.querySelector("#e1").textContent;
    } else if(value == 2) {
        document.querySelector("#demo3").textContent = document.querySelector("#e2").textContent;
    } else if(value == 3) {
        document.querySelector("#demo3").textContent = document.querySelector("#e3").textContent;
    } else if(value == 4 ) {
        document.querySelector("#demo3").textContent = document.querySelector("#e4").textContent;
    }
})
document.querySelector("#night").addEventListener('change', ()=> {
    document.getElementById("banner").style.backgroundImage = "url(./img/night.png)"
    let value = document.querySelector("#night").value;
    localStorage.setItem("night", value);
    if(value == 1 ) {
        document.querySelector("#demo4").textContent = document.querySelector("#n1").textContent;
    } else if(value == 2) {
        document.querySelector("#demo4").textContent = document.querySelector("#n2").textContent;
    } else if(value == 3) {
        document.querySelector("#demo4").textContent = document.querySelector("#n3").textContent;
    } else if(value == 4 ) {
        document.querySelector("#demo4").textContent = document.querySelector("#n4").textContent;
    }
})
    let M = localStorage.getItem("morning")
    if(M == 1 ) {
        document.querySelector("#demo1").textContent = document.querySelector("#m1").textContent;
    } else if(M == 2) {
        document.querySelector("#demo1").textContent = document.querySelector("#m2").textContent;
    } else if(M == 3) {
        document.querySelector("#demo1").textContent = document.querySelector("#m3").textContent;
    } else if(M == 4 ) {
        document.querySelector("#demo1").textContent = document.querySelector("#m4").textContent;
    }

    let A = localStorage.getItem("afternoon")
    if(A == 1 ) {
        document.querySelector("#demo2").textContent = document.querySelector("#a1").textContent;
    } else if(A == 2) {
        document.querySelector("#demo2").textContent = document.querySelector("#a2").textContent;
    } else if(A == 3) {
        document.querySelector("#demo2").textContent = document.querySelector("#a3").textContent;
    } else if(A == 4 ) {
        document.querySelector("#demo2").textContent = document.querySelector("#a4").textContent;
    }

    let E = localStorage.getItem("evening")
    if(E == 1 ) {
        document.querySelector("#demo3").textContent = document.querySelector("#e1").textContent;
    } else if(E == 2) {
        document.querySelector("#demo3").textContent = document.querySelector("#e2").textContent;
    } else if(E == 3) {
        document.querySelector("#demo3").textContent = document.querySelector("#e3").textContent;
    } else if( E == 4 ) {
        document.querySelector("#demo3").textContent = document.querySelector("#e4").textContent;
    }

    let N = localStorage.getItem("night")
    if(N == 1 ) {
        document.querySelector("#demo4").textContent = document.querySelector("#n1").textContent;
    } else if(N == 2) {
        document.querySelector("#demo4").textContent = document.querySelector("#n2").textContent;
    } else if( N == 3) {
        document.querySelector("#demo4").textContent = document.querySelector("#n3").textContent;
    } else if( N == 4 ) {
        document.querySelector("#demo4").textContent = document.querySelector("#n4").textContent;
    }

setInterval(() => {
    let t = new Date()
    let hour = t.getHours();
    if( hour >= 7 && hour < 12 ) {
        document.querySelector("#morning").innerHTML = "GOOD MORNING!! WAKE UP!!"
        document.querySelector("#dash").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
    } else if(hour >= 12 && hour < 16 ) {
        document.querySelector("#morning").innerHTML = "GOOD Afternoon!! LAUNCH TIME!!"
        document.querySelector("#dash").innerHTML = "LET'S HAVE SOME LAUNCH !!"
    } else if(hour >= 16 && hour < 19 ) {
        document.querySelector("#morning").innerHTML = "GOOD EVENING!! SNACK TIME!!"
        document.querySelector("#dash").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    } else if (hour >= 19 && hour < 7) {
        document.querySelector("#morning").innerHTML = "GOOD NIGHT!! sweat dreams !!"
        document.querySelector("#dash").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    } 
    document.querySelector("#hour").innerHTML = hour
    document.querySelector("#minus").innerHTML = t.getMinutes();
    document.querySelector("#sec").innerHTML = t.getSeconds();
    if(hour >= 12 ) {
        document.querySelector("#am").innerHTML = "PM"
    }
}, 1000);


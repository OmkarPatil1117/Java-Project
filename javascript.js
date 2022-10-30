var date = new Date();
var hour = date.getHours();

if(hour >= 10) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/window (2).png)"
}

if(hour >= 20) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/Afternoo.png)"
}

if(hour >= 12) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/Afternoo.png)"
}

if(hour >= 16) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/evening.png)"
}

if(hour >= 21) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/night.png)"
}




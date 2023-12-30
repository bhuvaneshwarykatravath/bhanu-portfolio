let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
let stopbuttonElement = document.getElementById("stopButton");
let readybuttonElement = document.getElementById("readyButton");
let gobuttonElement = document.getElementById("goButton");

function redLightChange() {
    stopbuttonElement.style.backgroundColor = "#cf1124"
    stopLightElement.style.backgroundColor = "#cf1124"
    gobuttonElement.style.backgroundColor = "#1f1d41"
    goLightElement.style.backgroundColor = "#4b5069"
    readybuttonElement.style.backgroundColor = "#1f1d41"
    readyLightElement.style.backgroundColor = "#4b5069"
}

function yellowLightChange() {
    readybuttonElement.style.backgroundColor = "#f7c948"
    readyLightElement.style.backgroundColor = "#f7c948"
    stopbuttonElement.style.backgroundColor = "#1f1d41"
    stopLightElement.style.backgroundColor = "#4b5069"
    gobuttonElement.style.backgroundColor = "#1f1d41"
    goLightElement.style.backgroundColor = "#4b5069"
}

function greenLightChange() {
    stopbuttonElement.style.backgroundColor = "#1f1d41"
    stopLightElement.style.backgroundColor = "#4b5069"
    readybuttonElement.style.backgroundColor = "1f1d41"
    readyLightElement.style.backgroundColor = "#4b5069"
    gobuttonElement.style.backgroundColor = "#199473"
    goLightElement.style.backgroundColor = "#199473"
}
const root = document.documentElement;

const change = document.querySelector(".change");
change.addEventListener('click', function(){

const tl = document.querySelector('.Top-left').value;
const tr = document.querySelector('.Top-right').value;
const bl = document.querySelector('.Bottom-left').value;
const br = document.querySelector('.Bottom-right').value;

root.style.setProperty("--topleftradius", tl + "px");
root.style.setProperty("--toprightradius", tr + "px");
root.style.setProperty("--bottomleftradius", bl + "px");
root.style.setProperty("--bottomrightradius", br + "px");

});
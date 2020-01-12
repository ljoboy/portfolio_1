var p = document.getElementById("p");
var fermer = document.getElementById("fermer");
var s = document.getElementById("s");
var zoombox = document.getElementById("zoombox");
var gal = document.getElementById("gal");
var child = null;
var galimg = null;
var zImg = document.getElementById("zImg");

gal.onclick = function (e) {
    galimg = e.target;
    child = galimg.parentElement;
    zoomboxChanger();
    if (galimg.src !== undefined && galimg.src !== null) {
        zoombox.style.display = "block";
    }
};

function zoomboxChanger() {
    if (child === child.parentNode.firstElementChild){
        p.style.display = "none";
    } else{
        p.style.display = "block";
    }
    if (child === child.parentNode.lastElementChild){
        s.style.display = "none";
    } else{
        s.style.display = "block";
    }
    zImg.src = galimg.src;
}

s.onclick = function () {
    child = child.nextElementSibling;
    galimg = child.firstElementChild;
    zoomboxChanger();
};

p.onclick = function () {
    child = child.previousElementSibling;
    galimg = child.firstElementChild;
    zoomboxChanger();
};

fermer.onclick = function () {
    zoombox.style.display = "none";
};
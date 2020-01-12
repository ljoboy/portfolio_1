var img = document.getElementById("img");
var mot = document.getElementById("mot");
var prec = document.getElementById("prec");
var suiv = document.getElementById("suiv");
var images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
var mots = ["Le joker ! Why so serious", "King Kong vs Dinosaure", "Tigre dans le noir"];
var nb = 0;

function slider(n) {
    if (n >= images.length){
        nb = 0;
        n = nb;
    }else if (n < 0){
        nb = images.length - 1;
        n = nb;
    }

    img.src = "img/" + images[n];
    mot.innerText = (mots[n] !== undefined && mots[n] !== "") ? mots[n] : "Tres belle image";
}

prec.onclick = function () {
    if (nb > 0){
        nb--;
    }
    slider(nb);
};

suiv.onclick = function () {
    if (nb < images.length){
        nb++;
    }else{
        nb = 0
    }
    slider(nb);
};

setInterval(function () {
    if (nb < images.length){
        nb++;
    }else{
        nb = 0
    }
    slider(nb);
}, 5000);

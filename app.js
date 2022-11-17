function moverPosicionRandom(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.random() * (window.innerHeight - 
        elm.offsetHeight) + "px";
    elm.style.left = Math.random() * (window.innerWidth - 
        elm.offsetWidth) + "px";
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModSex = document.getElementsByClassName("modSex")[0];
let videoGF = document.getElementById("videoGF");

btnNo.addEventListener("mouseenter", function(e) {
    moverPosicionRandom(e.target)
});

btnSi.addEventListener("click", function(e) {
    alert("Sabía que dirías que si. Casemonos ya y tengamos hijos. TE AMO!!!!");
    divModSex.style.display = "block";
const cancion = new Audio('media\\img_modo_hot.mp3');
    cancion.play();
    videoGF.pause();
    videoGF.style.display = "none";
    btnNo.style.display = "none";
});
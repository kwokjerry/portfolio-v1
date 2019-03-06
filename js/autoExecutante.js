(function() {
    "use strict";

var menu = document.getElementById("menu");
var logo = document.getElementById("logo");

var audioBtn = document.getElementById("audio");
var audio = document.getElementById("myAudio");
var soundmute = document.getElementById("sound-mute");
var soundon = document.getElementById("sound-on");

var btnMenuBurger = document.getElementById("chkBoutonBurger");
var btnMenuMobile = document.getElementById("btnMenuMobile");

var global = document.getElementById("global");

var modalImage = document.getElementsByClassName("modalImage");
var spanImg = document.getElementsByClassName("close");
var modalImg = document.getElementById('myModalImg');

var btnWeb = document.getElementById("btnWeb");
var btnVideo = document.getElementById("btnVideo");
var btnArt = document.getElementById("btnArt");
var btnFooter = document.getElementById("btnFooter");
var btnFooter1 = document.getElementById("btnFooter1");

var modalFooter = document.getElementById('modalFooter');


/*
 *===================================================
 * Taille de la bar de menu =========================
 *===================================================
*/
window.onscroll = function() {
	scrollFonction()
};

function scrollFonction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        menu.style.padding = "0em";
        logo.style.height = "55px";
    } else {
        menu.style.padding = "1em";
        logo.style.height = "70px";
    }
}

/*
 *===================================================
 * Audio ============================================
 *===================================================
*/

audioBtn.addEventListener("click", togglePlay);
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause()
    soundon.style.display = "none";
    soundmute.style.display = "block";
  } else {
    audio.play();
    soundmute.style.display = "none";
    soundon.style.display = "block";
  }
};
audio.onplaying = function() {
  isPlaying = true;
};
audio.onpause = function() {
  isPlaying = false;
};

/*
 *===================================================
 * Le menu burger ===================================
 *===================================================
*/

btnMenuBurger.addEventListener("click", activeMenuBurger);

function activeMenuBurger(){
    if (btnMenuBurger.checked == true){
        btnMenuMobile.style.transform = 'translateX(' + 0 + '%)';
    } else if (btnMenuBurger.checked == false){
        btnMenuMobile.style.transform = 'translateX(' + 100 + '%)';
    }

}


/*
 *===================================================
 * Le modal d'image =================================
 *===================================================
*/
if(document.body.contains(global)){
    var i = 0;

    for(i; i<modalImage.length; i++){
        modalImage[i].addEventListener("click", afficherModal);
    }

    spanImg[0].addEventListener("click", fermeSpanImg);
    modalImg.addEventListener("click", fermerModalClique);
}

/*
 *===================================================
 * Le modal de la page web ========================
 *===================================================
*/
if(document.body.contains(global)){
    btnWeb.addEventListener("click", afficherModalPageWeb);
    spanImg[1].addEventListener("click", fermeSpanPageWeb);
}

/*
 *===================================================
 * Le modal de la page video ========================
 *===================================================
*/
if(document.body.contains(global)){
    btnVideo.addEventListener("click", afficherModalPageVideo);
    spanImg[2].addEventListener("click", fermeSpanPageVideo);
}


/*
 *===================================================
 * Le modal de la page art ========================
 *===================================================
*/
if(document.body.contains(global)){
    btnArt.addEventListener("click", afficherModalPageArt);
    spanImg[3].addEventListener("click", fermeSpanPageArt);
}

/*
 *===================================================
 * Le modal de la page art ========================
 *===================================================
*/
if(document.body.contains(global)){
    btnFooter.addEventListener("click", afficherModalPageFooter);
    btnFooter1.addEventListener("click", afficherModalPageFooter);
    spanImg[4].addEventListener("click", fermeSpanPageFooter);
    modalFooter.addEventListener("click", fermerModalClique1);
}

})();



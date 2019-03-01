(function() {
	"use strict";

var menu = document.getElementById("menu");
var logo = document.getElementById("logo");

var btnMenuBurger = document.getElementById("chkBoutonBurger");
var btnMenuMobile = document.getElementById("btnMenuMobile");

var global = document.getElementById("global");
var modalImage = document.getElementsByClassName("modalImage");
var spanImg = document.getElementsByClassName("close");

var modalImg = document.getElementById('myModalImg');

var modalVoxel= document.getElementsByClassName("modalVoxel");

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
}

})();



function afficherModal(event){	
    var modalImg = document.getElementById('myModalImg');		
    var Img = document.getElementById('image');
    modalImg.style.display = "block";
    Img.src = this.src;
}

function fermeSpanImg(event) {
	var modalImg = document.getElementById('myModalImg');
    modalImg.style.display = "none";
}

/*====================WEB================*/
function afficherModalPageWeb(event) {
    var modalPageWeb = document.getElementById('modalWeb');
    var menu = document.getElementById("menu");

    modalPageWeb.style.display = "block";
    menu.style.display = "none";
}

function fermeSpanPageWeb(event) {
    var modalPageWeb = document.getElementById('modalWeb');
    var menu = document.getElementById("menu");

    modalPageWeb.style.display = "none";
    menu.style.display = "flex";
}

/*====================VIDEO================*/
function afficherModalPageVideo(event) {
    var modalPageVideo = document.getElementById('modalVideo');
    var menu = document.getElementById("menu");
    //var video = document.getElementById("videoAvion");

    //video.stopVideo();
    modalPageVideo.style.display = "block";
    menu.style.display = "none";
}

function fermeSpanPageVideo(event) {
    var modalPageVideo = document.getElementById('modalVideo');
    var menu = document.getElementById("menu");

    modalPageVideo.style.display = "none";
    menu.style.display = "flex";
}

/*====================ART================*/
function afficherModalPageArt(event) {
    var modalPageArt = document.getElementById('modalArt');
    var menu = document.getElementById("menu");

    modalPageArt.style.display = "block";
    menu.style.display = "none";
}

function fermeSpanPageArt(event) {
    var modalPageArt = document.getElementById('modalArt');
    var menu = document.getElementById("menu");

    modalPageArt.style.display = "none";
    menu.style.display = "flex";
}



//Fermer en cliquant partout
function fermerModalClique(event){
    var modalImg = document.getElementById('myModalImg');

	if (event.target == modalImg) {
        modalImg.style.display = "none";
    }
}
function afficherModal(event){	
    var modalImg = document.getElementById('myModalImg');		
    var Img = document.getElementById('image');
    modalImg.style.display = "block";
    Img.src = this.src;
}

/*======Fermer tout=====*/
function fermeSpanImg(event) {
	var modalImg = document.getElementById('myModalImg');
    modalImg.style.display = "none";
}
/*
//Fermer en cliquant partout
function fermerModalImgClique(event){
	var modalImg = document.getElementById('myModalImg');
	var modalTxt = document.getElementsByClassName('modalTxtClass');

	if (event.target == modalImg) {
        modalImg.style.display = "none";
    }
}*/
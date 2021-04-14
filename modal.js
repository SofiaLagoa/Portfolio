var modal = document.getElementById("myModal");
var img = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

hacerModal(modal, img, modalImg, captionText, span);
hacerModal(modal, img2, modalImg, captionText, span);
hacerModal(modal, img3, modalImg, captionText, span);

function hacerModal(modal, img, modalImg, captionText, span) {
    let myModal = modal;
    let myImg = img;
    let myModalImg = modalImg;
    let myCaptionText = captionText
    myImg.onclick = function() {
        myModal.style.display = "block";
        myModalImg.src = this.src;
        myCaptionText.innerHTML = this.alt;

    }

    let mySpan = span;
    mySpan.onclick = function() {
        modal.style.display = "none";
    }

    myModal.onclick = function() {
        modal.style.display = "none";
    }

}
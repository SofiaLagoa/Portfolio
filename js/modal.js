let modal = document.getElementById("myModal");
let captionText = document.getElementById("caption");
let span = document.getElementsByClassName("close")[0];

//Fotos proyecto Pharmadic
let img = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
//Pharmadic
let modalImg = document.getElementById("img01");

//Fotos proyecto Sannu Foods
let imgSannuFoods = document.querySelector(".imgSannu1");
let imgSannuFoods2 = document.querySelector(".imgSannu2");
let imgSannuFoods3 = document.querySelector(".imgSannu3");
let imgSannuFoods4 = document.querySelector(".imgSannu4");
//Sannu Foods
let modalImgSannu = document.getElementById("img01Sannu");

//HacerModal Pharmadic
hacerModal(modal, img, modalImg, captionText, span);
hacerModal(modal, img2, modalImg, captionText, span);
hacerModal(modal, img3, modalImg, captionText, span);

//HacerModal Sannu Foods
hacerModal(modal, imgSannuFoods, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods2, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods3, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods4, modalImgSannu, captionText, span);

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
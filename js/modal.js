import { hacerModal } from "../js/hacerModal.js"

let modal = document.getElementById("myModal");
let captionText = document.getElementById("caption");
let span = document.getElementsByClassName("close")[0];

//Fotos proyecto Pharmadic
let img = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
//Pharmadic
let modalImg = document.getElementById("img01");

//HacerModal Pharmadic
hacerModal(modal, img, modalImg, captionText, span);
hacerModal(modal, img2, modalImg, captionText, span);
hacerModal(modal, img3, modalImg, captionText, span);
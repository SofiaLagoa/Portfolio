import { hacerModal } from "../js/hacerModal.js"

let modal = document.getElementById("myModal");
let captionText = document.getElementById("caption");
let span = document.getElementsByClassName("close")[0];

//Fotos proyecto Sannu Foods
let imgCalculador = document.querySelector(".calculador1");
let imgCalculador2 = document.querySelector(".calculador2");
let imgCalculador3 = document.querySelector(".calculador3");

//Sannu Foods
let modalImgCalculador = document.getElementById("img01Calculador");

//HacerModal Sannu Foods
hacerModal(modal, imgCalculador, modalImgCalculador, captionText, span);
hacerModal(modal, imgCalculador2, modalImgCalculador, captionText, span);
hacerModal(modal, imgCalculador3, modalImgCalculador, captionText, span);

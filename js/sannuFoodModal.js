import { hacerModal } from "../js/hacerModal.js"

let modal = document.getElementById("myModal");
let captionText = document.getElementById("caption");
let span = document.getElementsByClassName("close")[0];

//Fotos proyecto Sannu Foods
let imgSannuFoods = document.querySelector(".imgSannu1");
let imgSannuFoods2 = document.querySelector(".imgSannu2");
let imgSannuFoods3 = document.querySelector(".imgSannu3");
let imgSannuFoods4 = document.querySelector(".imgSannu4");
//Sannu Foods
let modalImgSannu = document.getElementById("img01Sannu");

//HacerModal Sannu Foods
hacerModal(modal, imgSannuFoods, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods2, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods3, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods4, modalImgSannu, captionText, span);
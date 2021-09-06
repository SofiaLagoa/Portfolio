import { hacerModal } from "../js/hacerModal.js"

let modal = document.getElementById("myModal");
let captionText = document.getElementById("caption");
let span = document.getElementsByClassName("close")[0];

//Fotos proyecto Calculador de Materiales
let imgSannuFoods = document.querySelector(".imgSannu1");
let imgSannuFoods2 = document.querySelector(".imgSannu2");
let imgSannuFoods3 = document.querySelector(".imgSannu3");
let imgSannuFoods4 = document.querySelector(".imgSannu4");

//Calculador de Materiales para la cosntruccion 
let modalImgSannu = document.getElementById("img01Sannu");

//HacerModal Calculador de Materiales
hacerModal(modal, imgSannuFoods, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods2, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods3, modalImgSannu, captionText, span);
hacerModal(modal, imgSannuFoods4, modalImgSannu, captionText, span);
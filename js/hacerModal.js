export function hacerModal(modal, img, modalImg, captionText, span) {
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
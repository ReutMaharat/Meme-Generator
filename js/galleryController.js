'use strict'
function renderGallery(){
    let elImageGalleryContainer = document.querySelector('.image-gallery-container')
    let strHTMLs = ``
    gImgs.forEach(img=>{
        strHTMLs += `<img onClick="onClickImg(${img.id})" src="images/${img.id}.jpg"/>`
    })

    elImageGalleryContainer.innerHTML = strHTMLs

}

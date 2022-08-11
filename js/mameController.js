var gElCanvas;
var gCtx;
var fontSize;
var color;

function init() {
  gElCanvas = document.querySelector("#my-canvas");
  gCtx = gElCanvas.getContext("2d");
  renderGallery();
  renderMeme();
}

function getTxtFromUser() {
  elText = document.querySelector(".user-txt").value;
  console.log(elText);
  updateGMeme("txt", elText);
  renderMeme(elText);
}

function renderMeme(txt, fontSize, color) {
  const img = new Image();
  img.src = `images/${gMeme.selectedImgId}.jpg`
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    gCtx.font = fontSize + "px verdana, sans-serif";
    gCtx.fillStyle = color;
    gCtx.textAlign = "start";
    gCtx.fillText(txt, 30, 30);
  };
}

function onChangeFontColor() {
  let elFontColor = document.querySelector(".font-color").value;
  console.log(elFontColor);
  updateGMeme("color", elFontColor);
  const currMeme = getMeme();
  console.log(currMeme);
  renderMeme(currMeme.lines[0].txt,currMeme.lines[0].size,currMeme.lines[0].color);
  return elFontColor;
}

function onChangeFontSize(operator) {
  let fontSize = gMeme.lines[0].fontSize;
  if (operator === "-") {
    fontSize--;
  } else {
    fontSize++;
  }
  setMemeFontSize(fontSize);
  updateGMeme("fontSize", fontSize);
  const currMeme = getMeme();
  console.log(currMeme);
  renderMeme(currMeme.lines[0].txt, currMeme.lines[0].fontSize);
  return fontSize;
}

function onClickImg(id){
  var elGallery = document.querySelector('.image-gallery-container')
  var elCanvas = document.querySelector('.editor-container')
  elCanvas.style.display='block'
  elGallery.style.display='none'
  setImg(id)
  renderMeme()
  console.log(id,'hhh')
}





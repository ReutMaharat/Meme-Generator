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

function renderMeme() {
  const meme = getMeme();
  const img = new Image();
  img.src = `images/${meme.selectedImgId}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    meme.lines.forEach((line,idx)=>{
    gCtx.font =meme.lines[idx].fontSize + "px " +meme.lines[idx].fontFamily + ", sans-serif";
    gCtx.fillStyle = meme.lines[idx].color;
    gCtx.textAlign = meme.lines[idx].align;
    gCtx.lineWidth = 5;
    gCtx.strokeText(meme.lines[idx].txt, 200, meme.lines[idx].posY);
    gCtx.strokeStyle = meme.lines[idx].txtBorderColor;
    gCtx.fillText(meme.lines[idx].txt, 200, meme.lines[idx].posY);
  })
}
}

function getTxtFromUser() {
  elText = document.querySelector(".user-txt").value;
  console.log(elText,'text')
  updateGMeme("txt", elText);
  renderMeme();
}

function onChangeFontColor() {
  let elFontColor = document.querySelector(".font-color").value;
  console.log(elFontColor);
  updateGMeme("color", elFontColor);
  renderMeme();
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
  renderMeme();
  return fontSize;
}

function onClickImg(id) {
  var elGallery = document.querySelector(".image-gallery-container");
  var elCanvas = document.querySelector(".editor-container");
  elCanvas.style.display = "block";
  elGallery.style.display = "none";
  setImg(id);
  renderMeme();
  console.log(id, "hhh");
}

function onTextAlign(alignment) {
  setMemeAlignText(alignment);
  updateGMeme("align", alignment);
  renderMeme();
}

function onDownloadMeme(elLink) {
  const data = gElCanvas.toDataURL();
  elLink.href = data;
  elLink.download = "my-meme";
}

function onChangeTxtBorderColor() {
  let elBorderTxtColor = document.querySelector(".border-txt-color").value;
  updateGMeme("txtBorderColor", elBorderTxtColor);
  renderMeme();
  return elBorderTxtColor;
}

function onChangeFontFamily(elFontFamily) {
  setFontFamily(elFontFamily);
  updateGMeme("fontFamily", elFontFamily);
  renderMeme();
}

function onDeleteTxtLine() {
var meme = getMeme()
//  meme.lines[meme.selectedLineIdx].txt = ''
 document.querySelector(".user-txt").value = "";
 updateGMeme('txt','')
 if(meme.selectedLineIdx === 0){
  renderMeme()
   return
  }
 meme.selectedLineIdx--
 console.log(meme.selectedLineIdx)
 renderMeme();
}

function onAddLine() { 
  document.querySelector('.user-txt').value=''
  setAddLine()
  
}

function change(){
  const text = document.querySelector('.kotak .input #text');
  const align = document.querySelector('.kotak .input #align');
  const bg = document.querySelector('.kotak .input #bg');
  const quote = document.querySelector('.quotes .gambar');
  const tulisan = document.querySelector('.quotes .gambar .text');
  const dari = document.querySelector('.quotes .gambar .dari');
  const sumber = document.querySelector('.kotak .input #dari');
  
  quote.classList.remove('bg1');
  quote.classList.remove('bg2');
  quote.classList.remove('bg3');
  quote.classList.remove('bg4');
  quote.classList.remove('bg5');
  quote.classList.remove('bg6');
  quote.classList.add(bg.value);
  
  tulisan.classList.remove('center');
  tulisan.classList.remove('left');
  tulisan.classList.remove('right');
  tulisan.classList.add(align.value);
  
  tulisan.innerHTML = text.value;
  dari.innerHTML = " ~ "+sumber.value+" ~ ";
}

function convert(){
  const time = new Date();
domtoimage.toBlob(document.getElementById('gambar'))
    .then(function (blob) {
        window.saveAs(blob, 'GQUOTEE '+time+'.png');
    });
}
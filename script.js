function change(){
  const text = document.querySelector('.kotak .input #text');
  const align = document.querySelector('.kotak .input #align');
  const bg = document.querySelector('.kotak .input #bg');
  const quote = document.querySelector('.quotes .gambar');
  const tulisan = document.querySelector('.quotes .gambar .text');
  const dari = document.querySelector('.quotes .gambar .dari');
  const sumber = document.querySelector('.kotak .input #dari');
  const selector = document.getElementById('selector');
  const color = document.getElementById('color');
  const quotes = document.getElementById('quote');
  const source = document.getElementById('sumber');
  const tahun = document.getElementById('tahun');
  const bgCustom = document.getElementById('manipulasiBackground');
  

  
  tulisan.classList.remove('center');
  tulisan.classList.remove('left');
  tulisan.classList.remove('right');
  tulisan.classList.add(align.value);
  
  tulisan.innerHTML = text.value;
  dari.innerHTML = " ~ "+sumber.value+" ~ ";
  
  let file = selector.files[0];
  if (bgCustom.checked) {
    if (selector.value) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        let x = reader.result;
        quote.style.background = `url(${x})`;
        quote.style.backgroundPosition = 'center';
      }
    }
  }else{
    quote.classList.remove('bg1');
    quote.classList.remove('bg2');
    quote.classList.remove('bg3');
    quote.classList.remove('bg4');
    quote.classList.remove('bg5');
    quote.classList.remove('bg6');
    quote.style.background = '';
    quote.classList.add(bg.value);
  }
  
  quotes.style.color = color.value;
  source.style.color = color.value;
  tahun.style.color = color.value;
  
}

function convert(){
  const time = new Date();
domtoimage.toBlob(document.getElementById('gambar'))
    .then(function (blob) {
        window.saveAs(blob, 'GQUOTEE '+time+'.png');
    });
}
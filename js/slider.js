//Script para hacer una galeria animada mediante dos botones. Vamos recorriendo las imagenes y modificando su visibilidad añadiendo o quitando la clase 'hidden'
//cada fto va acopañada de un texto inferior


const sliderL = document.getElementById('slide-left')
const sliderR = document.getElementById('slide-right')
const foto1 = document.getElementById('foto1')
const foto2 = document.getElementById('foto2')
const foto3 = document.getElementById('foto3')
const foto4 = document.getElementById('foto4')
const foto1_txt = document.getElementById('foto1-txt')
const foto2_txt = document.getElementById('foto2-txt')
const foto3_txt = document.getElementById('foto3-txt')
const foto4_txt = document.getElementById('foto4-txt')
let cterSlider = 0



sliderL.onclick = function() {

    if (cterSlider < 1) cterSlider = 3
    else cterSlider--

        sliderpos(cterSlider);

}


sliderR.onclick = function() {

    if (cterSlider > 2) cterSlider = 0
    else cterSlider++

        sliderpos(cterSlider);
}


function sliderpos(p1) {
    switch (p1) {
        case 0:
            foto1.classList.remove('hidden');
            foto2.classList.add('hidden');
            foto3.classList.add('hidden');
            foto4.classList.add('hidden');
            foto1_txt.classList.remove('hidden');
            foto2_txt.classList.add('hidden');
            foto3_txt.classList.add('hidden');
            foto4_txt.classList.add('hidden');
            break;
        case 1:
            foto1.classList.add('hidden');
            foto2.classList.remove('hidden');
            foto3.classList.add('hidden');
            foto4.classList.add('hidden');
            foto1_txt.classList.add('hidden');
            foto2_txt.classList.remove('hidden');
            foto3_txt.classList.add('hidden');
            foto4_txt.classList.add('hidden');
            break;
        case 2:
            foto1.classList.add('hidden');
            foto2.classList.add('hidden');
            foto3.classList.remove('hidden');
            foto4.classList.add('hidden');
            foto1_txt.classList.add('hidden');
            foto2_txt.classList.add('hidden');
            foto3_txt.classList.remove('hidden');
            foto4_txt.classList.add('hidden');
            break;
        case 3:
            foto1.classList.add('hidden');
            foto2.classList.add('hidden');
            foto3.classList.add('hidden');
            foto4.classList.remove('hidden');
            foto1_txt.classList.add('hidden');
            foto2_txt.classList.add('hidden');
            foto3_txt.classList.add('hidden');
            foto4_txt.classList.remove('hidden');
            break;
    }
}
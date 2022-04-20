//Controla la conmutacion de la visibilidad del menu superior. 
//Animacion realizada en CSS con la clase 'active' 


const toggle = document.getElementById('toggle');
const buttons = document.getElementById('bann-buttons')
const banner = document.getElementById('banner')
toggle.onclick = function() {
    toggle.classList.toggle('active');
    buttons.classList.toggle('hidden');
    banner.classList.toggle('active')
}
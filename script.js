let colorBlack = document.querySelector('#color1');
colorBlack.classList.add('selected');


const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

color1.addEventListener('click', selectSelected);
color2.addEventListener('click', selectSelected);
color3.addEventListener('click', selectSelected);
color4.addEventListener('click', selectSelected);

function selectSelected(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected'); // O .target retorna o elemento que acionou o evento.
}


let selected = document.querySelector('.selected');
let pixels = document.querySelectorAll('.pixel');
const cssSelected = window.getComputedStyle(selected, null);
let bgColor = cssSelected.getPropertyValue("background-color");

pixels.addEventListener('click', function(){
    for (let i = 0; i < cssSelected.length; i += 1) {
        cssSelected.style = cssSelected.item[i];
    }
})
console.log(cssSelected)

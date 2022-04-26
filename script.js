let colorBlack = document.querySelector('#color1');
colorBlack.classList.add('selected');

// let colores = document.querySelector('.color');
// colores.addEventListener('click', function (){
//     const selected = document.querySelector('.selected');
//     selected.classList.remove('selected');
//     // selected.classList.add('selected');
// });
// function colorPaletteClicked(event) {
//     for (let color of colorPalette) {
//         if (color.className === 'color selected') {
//             color.className = 'color';
//         }
//     }
//     event.target.className = 'color selected';
// }

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
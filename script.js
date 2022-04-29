const colorBlack = document.querySelector('#color1');
colorBlack.classList.add('selected');

const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

function selectSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected'); // O .target retorna o elemento que acionou o evento.
}

color1.addEventListener('click', selectSelected);
color2.addEventListener('click', selectSelected);
color3.addEventListener('click', selectSelected);
color4.addEventListener('click', selectSelected);

function colorirPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i of pixels) {
    i.addEventListener('click', function(event) {
      const selected = document.querySelector('.selected');
      const cssSelected = window.getComputedStyle(selected, null);
      const bgColor = cssSelected.getPropertyValue('background-color');
       /* https:www.w3schools.com/jsref/jsref_getcomputedstyle.asp */
      i.style.backgroundColor = bgColor;
      console.log(event.target);
    });
  }
}
colorirPixels();

const body = document.querySelector('#button');
const button = document.createElement('button');
const textButton = 'Limpar';
button.innerText = textButton;
body.appendChild(button);
button.setAttribute('id', 'clear-board');

function clearPixels() {
  const clearButton = document.getElementById('clear-board');
  const pixels = document.getElementsByClassName('pixel');
  clearButton.addEventListener('click', function(event) {
    for (let i of pixels) {
      i.style.backgroundColor = 'white';
      console.log(event.target);
    }
  });
}
clearPixels();

window.onload = (null);

function pagCarregada () {
    alert('Pagína carregada, divirta-se :)');
}
pagCarregada();

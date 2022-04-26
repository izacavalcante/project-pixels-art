let colorBlack = document.querySelector('#color1');
colorBlack.classList.add('selected');

function colores() {
    const palette = document.querySelector('.color');
    for (let i = 0; i < palette.lenght; i += 1) {
        palette[i].addEventListener('click', function (event) {
            const selected = document.querySelector('.selected')[0];
            selected.classList.remove('selected');
            event.target.classList.add('selected');
        });
    }
}

window.onload = () => {
    colores();
};

// function mudaClasse (event) {
//     let corSelecionada = document.querySelector('.selected');
//     corSelecionada.classList.remove('selected');
//     event.target.classList.add('selected');


    
// }
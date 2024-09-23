const objetos = document.querySelectorAll('.objeto');
const lixeiras = document.querySelectorAll('.lixeira');

objetos.forEach(objeto => {
    objeto.addEventListener('dragstart', dragStart);
});

lixeiras.forEach(lixeira => {
    lixeira.addEventListener('dragover', dragOver);
    lixeira.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault(); // Permite que o objeto seja solto
}

function drop(e) {
    e.preventDefault();
    const objetoId = e.dataTransfer.getData('text/plain');
    const objeto = document.getElementById(objetoId);
    e.target.appendChild(objeto);
}

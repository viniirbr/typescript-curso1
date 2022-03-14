import { NegociacaoController } from './src/controllers/negociacao-controller.js';
const form = document.querySelector('.form');
const controller = new NegociacaoController();
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw Error('Não foi possível inicializar');
}

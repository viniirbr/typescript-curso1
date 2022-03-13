import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const form = document.querySelector('.form');
const controller = new NegociacaoController()

form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adicionar();
})



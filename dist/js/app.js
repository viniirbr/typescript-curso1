import { Negociacao } from './models/negociacao.js';
import { NegociacaoController } from './controllers/negociacao-controller.js';
const negociacao = new Negociacao(new Date(), 100, 10);
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const controller = new NegociacaoController();
    controller.adicionar();
});

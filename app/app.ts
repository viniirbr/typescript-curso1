import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 100, 10);
console.log(negociacao.volume);

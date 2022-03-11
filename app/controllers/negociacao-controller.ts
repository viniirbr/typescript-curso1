import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');     
    }

    adicionar(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao)
        console.log(this.negociacoes.lista());
        this.limpaFormulario();
    }

    criaNegociacao(): Negociacao {
        const reg = /-/g;
        const data = new Date(this.inputData.value.replace(reg, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value)
        return new Negociacao(data, quantidade, valor);   
    }

    limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}
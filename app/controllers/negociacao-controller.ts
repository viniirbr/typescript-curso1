import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');     
    }

    adicionar(): void {
        console.log(this.criaNegociacao());
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
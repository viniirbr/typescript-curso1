import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js"
import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes-view');
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adicionar(): void {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações realizadas em dias úteis são aceitas.")
            return;
        }
        this.negociacoes.adiciona(negociacao)
        this.atualizaNegociacoes()
        this.limpaFormulario();
    }

    private criaNegociacao(): Negociacao {
        const reg = /-/g;
        const data = new Date(this.inputData.value.replace(reg, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value)
        return new Negociacao(data, quantidade, valor);
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaNegociacoes(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação salva!')
    }

    private ehDiaUtil(data: Date) {
        return (data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO)
    }

}
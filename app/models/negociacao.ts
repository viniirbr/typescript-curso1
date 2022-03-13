export class Negociacao { 

    constructor(private _data: Date, private _quantidade: number, private _valor: number) {
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const reg = /-/g;
        const data = new Date(dataString.replace(reg, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseInt(valorString)
        return new Negociacao(data, quantidade, valor);
    }

}
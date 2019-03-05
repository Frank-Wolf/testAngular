import {Articulo} from './articulo'

export class Abarrote  implements Articulo{
    public nombre: String;
    public precio: number;
    public categoria: string; 
    constructor(){
        this.categoria = 'abarrote';
    }

    public imprimir(): string{
        let nombre: String = 'categoria';
        return nombre + ' : ' + this.categoria;
    }

    public esAbarrotes(): boolean{
        return true;
    }
}

import {Articulo} from './articulo'

export class Electronico  implements Articulo{
    public nombre: String;
    public precio: number;
    public categoria: string; 
    constructor(){
        this.categoria = 'electronico';
    }

    public imprimir(): string{
        let nombre: String = 'categoria';
        return nombre + ' : ' + this.categoria;
    }

    public esElectronico(): boolean{
        return true;
    }
}

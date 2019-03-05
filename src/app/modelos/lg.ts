import {Electronico} from './electronico'

export class Lg extends Electronico{
    constructor(){
        super();
    }

    public setPrecio(precio: number){
        this.precio = precio;  
    }

    public getCategoria(): string{
        return this.categoria;
    }
}

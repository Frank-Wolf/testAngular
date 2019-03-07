export interface Articulo {
    nombre: String; 
    marca?: String; 
    precio: number; 

    imprimir?;

    title?: string;
    description?: string;
    promotion?:boolean;

    categoria?:string;
    url?: string;
    id?: number;
    fecha?: Date;
}

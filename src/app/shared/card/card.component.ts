import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Articulo } from '../../modelos/articulo'
import { ArticulosComponent } from 'src/app/pages/articulos/articulos.component';
import { Samsung } from 'src/app/modelos';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  public border: boolean = false;

  @Input() articulo: Articulo;

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
    console.log(this.articulo);

    setTimeout(()=>{this.articulo.title="Cambiando";},3000)
  }

  @Output() onQuitar: EventEmitter<number> = new EventEmitter<number>();
  @Output() onSeleccionar: EventEmitter<boolean> = new EventEmitter<boolean>();

  public accionSeleccionar(event: boolean) {
    console.log(event);
    this.border = event;
    //this.onSeleccionar.emit(true);
  }

  public accionEliminar(event: boolean) {
    this.onQuitar.emit(this.articulo.id);
  }

  public ngOnDestroy(){
    console.log("he eliminado esta tarjeta");
  }


}

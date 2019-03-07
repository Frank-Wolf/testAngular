import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public botones: any[]=[{
    name: 'boton 1'
  },{
    name: 'boton 2'
  }];

  public promotion: boolean = true;

  @Input ('color') color: boolean ;

  @Output ('onSeleccionar') onSeleccionar:EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output ('onEliminar') onEliminar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
 
  aplicarPromocion(){
    this.color = !this.color;
  }

  public eliminar(){
    this.onEliminar.emit(true);
  }

  public seleccionar(){
    this.onSeleccionar.emit(true);
  }

}

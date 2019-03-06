import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../../modelos/articulo'
import { ArticulosComponent } from 'src/app/pages/articulos/articulos.component';
import { Samsung } from 'src/app/modelos';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() articulo: Articulo;

  constructor() { }

  ngOnInit() {
  }

}

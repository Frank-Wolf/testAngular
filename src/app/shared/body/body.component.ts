import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public precio: number = 200;
  public descripcion: string = 'Esta es la descripción';

  constructor() { }

  ngOnInit() {
  }

}

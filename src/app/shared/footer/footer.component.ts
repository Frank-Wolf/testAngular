import { Component, OnInit } from '@angular/core';

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
  },{
    name: 'boton 3'
  }];

  public promotion: boolean = true;

  public color: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  aplicarPromocion(){
    this.color = !this.color;
  }

}

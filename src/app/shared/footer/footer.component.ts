import { Component, OnInit, Input } from '@angular/core';

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

  @Input ('color') color: boolean ;

  constructor() { }

  ngOnInit() {
  }

  aplicarPromocion(){
    this.color = !this.color;
  }

}

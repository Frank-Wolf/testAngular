import { Component, OnInit, Input,SimpleChanges,OnChanges } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  @Input ('titulo') title: string;

  public style: any={
    color: 'red',
    'font-size':'24px'
  };

  @Input ('categoria') categoria: string;
  

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);

      console.log("cur", cur);
      console.log("pre", prev);


    }
  }
}

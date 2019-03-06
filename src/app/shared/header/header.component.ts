import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input ('titulo') title: string;

  public style: any={
    color: 'red',
    'font-size':'24px'
  };

  @Input ('categoria') categoria: string;
  

  constructor() { }

  ngOnInit() {
  }

}

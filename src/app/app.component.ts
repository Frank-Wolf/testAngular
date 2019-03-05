import { Component } from '@angular/core';
import { Articulo,Abarrote,Electronico,Samsung,Lg,Auto,Ford,Chevrolet} from './modelos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  constructor(){
    let articulo: Articulo;

    let categoria= 'electrónico';
    //let categoria2= 'electrónico';

    if(categoria=='electrónico'){
      articulo = new Electronico();
      console.log("hi "+articulo.imprimir());
    }

    let samsung:Samsung = new Samsung();
    console.log(samsung.getCategoria());
    /*
    if(categoria2=='electrónico'){
      articulo = new Electronico();
      console.log("hi "+articulo.imprimir());
    }
    */
    let ford: Auto = new Ford();
    console.log(ford.motor) ;
    
  }
}

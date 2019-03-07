import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {ArticulosService} from '../../services/articulos.service';
import { Articulo } from 'src/app/modelos';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticulosService]
})
export class AdminComponent implements OnInit {
  public articulos: Articulo[]
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,public  as:ArticulosService) {}

  ngOnInit() {
    this.articulos=this.as.articulos;
  }

  public agregar(){
    this.as.nuevo({
      id:this.articulos.length+1,
      nombre: 'Television 4K',
      marca: 'Samsung',
      precio: 4000.4654,
      title: 'Television 4K',
      description: '52 pulgadas',
      promotion:true,
      categoria:'E',
      url: 'assets/img/samsung.jpg',
      fecha: new Date()
    });
    this.articulos=this.as.articulos;
    this.modalRef.hide();
  }
  
  public borrar(articulo: Articulo){
    this.as.borrar(articulo);
    this.articulos=this.as.articulos;
  }

  public nuevo(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

}

import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {ArticulosService} from '../../services/articulos.service';
import { Articulo } from 'src/app/modelos';
import {FormGroup, FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticulosService]
})
export class AdminComponent implements OnInit {
  public articulos: Articulo[]
  modalRef: BsModalRef;
  public formArticulo: FormGroup;
  
  constructor(private modalService: BsModalService,public  as:ArticulosService) {}

  ngOnInit() {
    this.articulos=this.as.articulos;
    this.formArticulo = new FormGroup({  
      
      id:new FormControl(null),
      nombre: new FormControl(null,Validators.required),
      marca: new FormControl(),
      precio: new FormControl(null,Validators.required),
      title: new FormControl(),
      description: new FormControl(),
      promotion: new FormControl(),
      categoria: new FormControl(),
      url:new FormControl(),
      fecha: new FormControl()
      
    })
  }

  public agregar(){
    alert(this.formArticulo.valid);

    if(this.formArticulo.value.id == null){
     let articulo: Articulo = this.formArticulo.value;
     articulo.id = this.articulos.length+1; 
     this.as.nuevo(articulo);
      this.articulos=this.as.articulos;
      this.modalRef.hide();
    } else {
      let articulo: Articulo = this.formArticulo.value;
      this.as.editar(articulo);
      this.articulos=this.as.articulos;
    }
    this.modalRef.hide();
  }
  
  public borrar(articulo: Articulo){
    this.as.borrar(articulo);
    this.articulos=this.as.articulos;
  }

  public editar(articulo: Articulo, template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  this.formArticulo.patchValue(articulo);
  }

  public nuevo(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    this.formArticulo.reset();
    this.formArticulo.patchValue({});
  }

}

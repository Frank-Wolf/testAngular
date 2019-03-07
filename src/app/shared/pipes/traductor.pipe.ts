import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traductor'
})
export class TraductorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args && value) {

      if (args == 'ESP') {
        if(value=='E'){
          return 'Electrónico';
        }else if(value=='A'){
          return 'Abarrotes';
        }
      } else if (args == 'ENG') {
        if(value=='E'){
          return 'Electronics';
        }else if(value=='A'){
          return 'Grocery';
        }
      }
    }
    return null;
  }

}

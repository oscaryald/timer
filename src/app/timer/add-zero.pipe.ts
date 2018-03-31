import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addZero'
})
export class AddZeroPipe implements PipeTransform {
  transform(value: any, start?: any, end?: any): any {
      if(value < end){
          value = start + value;
      }else{
          value = value;
      }
    return value;
  }
}

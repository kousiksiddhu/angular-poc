import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validateEmail'
})
export class ValidateEmailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
      return value;
    }
    else{
      return null;
    }
  }

}

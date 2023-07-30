import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    //  console.log(targetUnits);

    if(!value) {
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.6094;
      case 'm':
        return value * 1.6094 * 1000;
      case 'cm':
        return value * 1.6094 * 1000 * 100; 
      default:
        throw new Error("Target unit not supported");
    }
    
     // miles to kms conversion
  }
}

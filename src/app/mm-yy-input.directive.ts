/* tslint:disable:no-unused-variable */

import { Directive, ElementRef, HostListener } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
@Directive(
{
  selector : '[appMyinput]'
})
 export class MmYyInputDirective
{
    constructor(private el : ElementRef){}
    @HostListener('input',['$event']) onInputChange(event : KeyboardEvent) : void{
      const input = this.el.nativeElement;
      let trimmed = input.value.replace(/[^0-9]/g,'');
      console.log('Input event triggered');  // Add this line

      if(trimmed > 4)
      {
        trimmed = trimmed.substr(0,4);
      }
      const numbers = [];
      numbers.push(trimmed.substr(0,2));
      if(trimmed.length > 2)
      {
        numbers.push(trimmed.substr(2,2));
      }
      input.value = numbers.join('/');

    }
    @HostListener('blur', ['$event']) onBlur(event: KeyboardEvent): void {
      const input = this.el.nativeElement;
      if (input.value.length !== 5) {
        input.value = '';
        console.log('blur event triggered');  // Add this line

      }
    }


}
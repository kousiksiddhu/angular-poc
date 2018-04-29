import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {

  constructor(private elem: ElementRef) { }

  @Input('appFormatInput') casing;
  
  @HostListener('blur') callOnBlur(){
    if (this.casing == 'uppercase')
      this.elem.nativeElement.value = this.elem.nativeElement.value.toUpperCase();
    else      
      this.elem.nativeElement.value = this.elem.nativeElement.value.toLowerCase();
  }

}

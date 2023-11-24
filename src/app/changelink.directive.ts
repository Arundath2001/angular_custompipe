import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appChangelink]'
})
export class ChangelinkDirective {
  constructor(private el: ElementRef) {
    let value = this.el.nativeElement;
    value .style.textDecoration = 'none';
    value .style.color = 'black';
    value .style.fontSize = '18px';
    value .style.fontFamily = 'Poppins';
    value.style.listStyle = 'none';
  }
  @HostListener('mouseenter') onMouseEnter() {
    let value = this.el.nativeElement;
    value .style.color = 'lightgrey';
    value .style.fontSize = '15px';
  }
  @HostListener('mouseleave') onMouseLeave() {
    let value = this.el.nativeElement;
    value .style.color = 'black';
    value .style.fontSize = '18px';
  }

}

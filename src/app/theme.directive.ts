import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {

  constructor(private elf:ElementRef) {
   // this.elf.nativeElement.style.color="yellow";
   // this.elf.nativeElement.style.backgroundColor="blue"
   }
// @HostListener('mouseover') onMouseover(){
//  // alert("hi");
//   this.elf.nativeElement.style.color="yellow";
//   this.elf.nativeElement.style.fontSize="40px"
// }
// @HostListener('mouseleave') onMouseleave(){
//  // alert("hi");
//   this.elf.nativeElement.style.color="red";
//   this.elf.nativeElement.style.fontSize="10px"
// }

@HostBinding('style.color') sColor="green";
@HostBinding('style.border') border1='5px solid blue';
}

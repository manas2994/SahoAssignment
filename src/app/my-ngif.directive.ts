import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyNgif]'
})
export class MyNgifDirective {

  constructor(private templeteRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    
   }
   @Input() set appMyNgif(condition: boolean){
   if (condition) {
    this.viewContainer.createEmbeddedView(this.templeteRef);
  
  } else {
    this.viewContainer.clear();
  }}
}

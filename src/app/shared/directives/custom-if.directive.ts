import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  @Input() set customIf(condicion: boolean) {
    if (condicion) {
      this.viewCountainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewCountainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewCountainer: ViewContainerRef
  ) {}
}

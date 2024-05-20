import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridContainer]',
  standalone: true
})
export class GridContainerDirective implements OnInit {

  @Input() flexDirection = "row";
  @Input() alignItems = "center";
  @Input() justifyContent = "start";
  @Input() gap = "4px";
  @Input() padding = "0px";
  @Input() margin = "0px";
  @Input() height = "auto";

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {

    const requiredStyles: any = {
      'display': 'flex',
      'align-items': this.alignItems,
      'justify-content': this.justifyContent,
      'width': '100%',
      "gap": this.gap,
      "padding": this.padding,
      "margin": this.margin,
      "flex-direction": this.flexDirection,
      "height": this.height
    };
    Object.keys(requiredStyles).forEach(newStyle => {
      this.renderer.setStyle(
        this.elRef.nativeElement, `${newStyle}`, requiredStyles[newStyle]
      );
    });

  }

}



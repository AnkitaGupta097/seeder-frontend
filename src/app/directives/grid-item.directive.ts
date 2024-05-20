import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItem]',
  standalone: true
})
export class GridItemDirective implements OnInit {

  @Input() flex = "1";
  @Input() padding = "2px";
  @Input() margin = "0px";
  @Input() alignSelf = "center";

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    const requiredStyles: any = {
      'flex': this.flex,
      "padding": this.padding,
      "margin": this.margin,
      "align-self": this.alignSelf
    };

    Object.keys(requiredStyles).forEach(newStyle => {
      this.renderer.setStyle(
        this.elRef.nativeElement, `${newStyle}`, requiredStyles[newStyle]
      );
    });

  }
}

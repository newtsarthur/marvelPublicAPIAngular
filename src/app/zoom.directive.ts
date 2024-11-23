import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]',
  standalone: true,
})
export class ZoomDirective {
  @Input('appZoom') zoomFactor: number = 1.2;


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.zoom(this.zoomFactor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoom(1);
  }

  private zoom(scale: number) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `scale(${scale})`
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.3s ease'
    );
  }
}

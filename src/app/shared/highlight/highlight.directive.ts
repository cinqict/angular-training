import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  private isFinished: boolean = false;

  constructor(private readonly elementRef: ElementRef) {}

  public ngAfterViewInit(): void {
    if (this.elementRef.nativeElement.innerText === 'Finished') {
      this.isFinished = true;
      this.changeColor('green');
    }
  }

  private changeColor(color: string): void {
    this.elementRef.nativeElement.style.color = color;
  }

  @HostListener('mouseenter') public onMouseEnter(): void {
    if (this.isFinished) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
      this.changeColor('white');
    }
  }

  @HostListener('mouseleave') public onMouseLeave(): void {
    if (this.isFinished) {
      this.changeColor('green');
      this.elementRef.nativeElement.style.backgroundColor = 'transparent';
    }
  }
}

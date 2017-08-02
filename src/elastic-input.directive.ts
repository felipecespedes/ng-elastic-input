import {
  AfterContentChecked,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';

@Directive({
  selector: 'input[elastic]'
})
export class ElasticInputDirective implements OnInit, AfterContentChecked, OnDestroy {

  @Input()
  public minWidth: number;

  @Input()
  public maxWidth: number;

  @Input()
  public delta = 5;

  private wrapper: HTMLElement;
  private mirror: HTMLElement;

  @HostListener('input', ['$event.target'])
  onInput(): void {
    this.update();
  }

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.wrapper = document.createElement('div');
    this.wrapper.style.position = 'fixed';
    this.wrapper.style.top = '-999px';
    this.wrapper.style.left = '0';
    document.body.appendChild(this.wrapper);

    this.mirror = document.createElement('span');
    this.mirror.style.whiteSpace = 'pre';

    this.setMirrorStyle(this.mirror, this.element.nativeElement);

    this.wrapper.appendChild(this.mirror);

    this.update();
  }

  ngAfterContentChecked() {
    this.update();
  }

  ngOnDestroy() {
    this.mirror.parentNode.removeChild(this.mirror);
    this.wrapper.parentNode.removeChild(this.wrapper);
  }

  setMirrorStyle(mirror: HTMLElement, element: HTMLElement): void {
    const style = window.getComputedStyle(element);

    ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle',
    'letterSpacing', 'textTransform', 'wordSpacing'].forEach(
      (value) => {
        mirror.style[value] = style[value];
      });

    mirror.style.paddingLeft = style.textIndent;

    if (style.boxSizing === 'border-box') {
      ['paddingLeft', 'paddingRight', 'borderLeftStyle', 'borderLeftWidth',
      'borderRightStyle', 'borderRightWidth'].forEach((value) => {
        mirror.style[value] = style[value];
      });
    } else if (style.boxSizing === 'padding-box') {
      ['paddingLeft', 'paddingRight'].forEach((value) => {
        mirror.style[value] = style[value];
      });
    }
  }

  update(): void {
    this.mirror.innerText = this.element.nativeElement.value;

    let elementWidth = this.mirror.offsetWidth + this.delta;
    if (this.minWidth != null && elementWidth < this.minWidth) {
      elementWidth = this.minWidth;
    } else if (this.maxWidth != null && elementWidth > this.maxWidth) {
      elementWidth = this.maxWidth;
    }
    this.element.nativeElement.style.width = `${elementWidth}px`;
  }
}

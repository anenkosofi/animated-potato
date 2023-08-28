import {Directive, HostBinding, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpened = false;
  @HostListener('document:click', ['$event']) toggleDropdown(event: Event) {
    this.isOpened = this.elementRef.nativeElement.contains(event.target) ? !this.isOpened : false;
  }
  constructor(private elementRef: ElementRef) {}

}

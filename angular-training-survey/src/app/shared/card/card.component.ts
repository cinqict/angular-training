import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public categoryId: number | undefined;
  @Input() public subCategoryId: number | undefined;

  @Output() public goBackToParent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private readonly router: Router) {}

  @HostListener('mouseenter') public doeIets = (): void => {
    this.goBackToParent.emit('Stuur mee');
  };

  public goToPage(): void {
    if (this.categoryId && !this.subCategoryId) {
      // state can be use to passing data to other components (see subcategory component to read state)
      this.router.navigate(['cat', this.categoryId], { state: { categoryId: this.categoryId } });
    } else if (this.categoryId && this.subCategoryId) {
      this.router.navigate(['cat', this.categoryId, this.subCategoryId]);
    }
  }
}

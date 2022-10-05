import { Component, OnInit } from '@angular/core';
import { Category } from '../core/config/config.model';
import { ConfigService } from '../core/config/config.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public allCategories: Category[] = [];

  constructor(private readonly configService: ConfigService) {}

  public ngOnInit(): void {
    this.configService.getCategories().subscribe((categories: Category[]) => {
      this.allCategories = categories;
    });
  }

  public receiveGoToParent($event: string): void {
    console.log($event);
  }
}

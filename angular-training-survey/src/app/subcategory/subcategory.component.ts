import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../core/config/config.model';
import { ConfigService } from '../core/config/config.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  public categoryId: number | undefined;
  public subCategories: Observable<Category[]> | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly configService: ConfigService, private readonly router: Router) {
    // read data from state when routing
    console.log(this.router.getCurrentNavigation()?.extras.state?.['categoryId']);
  }

  public ngOnInit(): void {
    const { categoryId = null } = this.route.snapshot.params;

    if (categoryId) {
      this.categoryId = +categoryId;
      this.subCategories = this.configService.getSubcategories(+categoryId);
    }
  }
}

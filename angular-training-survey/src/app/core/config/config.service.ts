import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private readonly http: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('assets/categories.json');
  }

  public getSubcategories(categoryId: number): Observable<Category[]> {
    return this.getCategories().pipe(
      map((allCategories: Category[]) => {
        const shouldHasCategory = allCategories.find((category: Category) => category.id === categoryId);
        const { subcategories = [] } = shouldHasCategory || {};
        return subcategories;
      })
    );
  }
}

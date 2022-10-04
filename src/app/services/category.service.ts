import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  constructor(private httpClient: HttpClient) {}

  getCategories(): Array<Category> {
    return [
      {
        id: 1,
        name: 'Category 1',
        imageUrl: '/assets/img/cat-1.jpg',
        productsCount: 100,
      },
      {
        id: 2,
        name: 'Category 2',
        imageUrl: '/assets/img/cat-1.jpg',
        productsCount: 100,
      },
      {
        id: 3,
        name: 'Category 3',
        imageUrl: '/assets/img/cat-1.jpg',
        productsCount: 100,
      },
      {
        id: 4,
        name: 'Category 4',
        imageUrl: '/assets/img/cat-4.jpg',
        productsCount: 100,
      },
    ];
  }
}

import { Injectable } from '@angular/core';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  public likedProducts: Array<Product> = [];
  constructor() {
    let savedLikes = localStorage.getItem('likes');
    if (savedLikes) {
      this.likedProducts = JSON.parse(savedLikes)
    }
  }

  public addToLiked (product: Product) {
    if (!this.likedProducts.includes(product)) {
      this.likedProducts.push(product);
      localStorage.setItem('likes', JSON.stringify(this.likedProducts));
    }
  }
}

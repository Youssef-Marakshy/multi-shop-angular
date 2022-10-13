import { Injectable } from '@angular/core';
import { ShopProduct } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  likedProducts: Array<ShopProduct> = [];
  constructor() { 
    let savedLikes = localStorage.getItem('likes');
    if (savedLikes) {
      this.likedProducts = JSON.parse(savedLikes)
    }
  }

  addToLiked (product: ShopProduct) {
    if (!this.likedProducts.includes(product)) {
      this.likedProducts.push(product);
      localStorage.setItem('likes', JSON.stringify(this.likedProducts));
    }
  }
}

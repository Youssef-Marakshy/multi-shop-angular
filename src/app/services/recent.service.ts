import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})

export class RecentService {
  defaultName: string = "Product Name Goes Here"
  defaultRating: number = 99;
  defaultPrice: number = 123.00;
  constructor(private httpClient: HttpClient) {

  }

  public getRecentProducts(): Array<ShopProduct> {
    return [
      {
        id: 1,
        name: this.defaultName,
        price: this.defaultPrice,
        priceDiscount: this.defaultPrice,
        imageUrl: '/assets/img/product-1.jpg',
        rating: 5,
        ratingCount: this.defaultRating,
        color: 'black',
        size: 's'
      },
      {
        id: 2,
        name: this.defaultName,
        price: this.defaultPrice,
        priceDiscount: this.defaultPrice,
        imageUrl: '/assets/img/product-2.jpg',
        rating: 4.5,
        ratingCount: this.defaultRating,
        color: 'white',
        size: 'm',
      },
      {
        id: 3,
        name: this.defaultName,
        price: this.defaultPrice,
        priceDiscount: this.defaultPrice,
        imageUrl: '/assets/img/product-3.jpg',
        rating: 3.5,
        ratingCount: this.defaultRating,
        color: 'black',
        size: 's'
      },
      {
        id: 4,
        name: this.defaultName,
        price: this.defaultPrice,
        priceDiscount: this.defaultPrice,
        imageUrl: '/assets/img/product-4.jpg',
        rating: 3,
        ratingCount: this.defaultRating,
        color: 'white',
        size: 'm'
      },
      {
        id: 5,
        name: this.defaultName,
        price: this.defaultPrice,
        priceDiscount: this.defaultPrice,
        imageUrl: '/assets/img/product-5.jpg',
        rating: 5,
        ratingCount: this.defaultRating,
        color: 'black',
        size: 's'
      },
      {
        id: 6,
        name: this.defaultName,
        price: this.defaultPrice,
        priceDiscount: this.defaultPrice,
        imageUrl: '/assets/img/product-6.jpg',
        rating: 4.5,
        ratingCount: this.defaultRating,
        color: 'white',
        size: 'm',
      },
      {
        id: 7,
        name: this.defaultName,
        price: this.defaultPrice,
        priceDiscount: this.defaultPrice,
        imageUrl: '/assets/img/product-7.jpg',
        rating: 3.5,
        ratingCount: this.defaultRating,
        color: 'black',
        size: 's'
      },
      {
        id: 8,
        name: this.defaultName,
        price: this.defaultPrice,
        priceDiscount: this.defaultPrice,
        imageUrl: '/assets/img/product-8.jpg',
        rating: 3,
        ratingCount: this.defaultRating,
        color: 'black',
        size: 's'
      },
    ];
  }
}

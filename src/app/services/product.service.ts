import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopProduct } from '../interfaces/product';
import { PriceRange } from '../interfaces/price-range';
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  defaultName: string = "Product Name Goes Here"
  defaultRating: number = 99;
  defaultPrice: number = 123.00;
  products: Array<ShopProduct> = [
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
    }
  ]
  detailProduct: ShopProduct = this.getRandomProduct();
  constructor(private httpClient: HttpClient) {

  }

  public setDetailProduct(detailProduct?: ShopProduct): void {
    this.detailProduct = detailProduct || this.getRandomProduct();
    console.log('Product Detail: ' + this.detailProduct.name);
  }

  public getDetailProduct(): ShopProduct {
    return this.detailProduct;
  }

  public getRandomProduct(): ShopProduct {
    return this.products[Math.floor(Math.random() * this.products.length)];
  }

  public getFeaturedProducts(): Array<ShopProduct> {
    return this.products;
  }

  public getProductsWithout(product: ShopProduct) {
    return this.products.filter(p => p != product);
  }

  getProductsWithFilter(
    sizes: Array<string>,
    colors: Array<string>,
    priceRanges: Array<PriceRange>,
    page: number = 0,
    pageSize: number = 9
  ) {
    let products = this.products.filter((x) => {
      return (
        this.filterSize(sizes, x) &&
        this.filterColor(colors, x) &&
        this.filterPrices(priceRanges, x)
      );
    });
    return products.slice(page * pageSize, page * pageSize + pageSize);
  }

  getProductsCountWithFilter(
    sizes: Array<string>,
    colors: Array<string>,
    priceRanges: Array<PriceRange>
  ): number {
    let products = this.products.filter((x) => {
      return (
        this.filterSize(sizes, x) &&
        this.filterColor(colors, x) &&
        this.filterPrices(priceRanges, x)
      );
    });
    return products.length;
  }

  filterSize(sizes: Array<string>, product: ShopProduct): boolean {
    if (sizes.length == 0) return true;
    return sizes.includes(product.size) || sizes.includes('');
  }
  filterColor(colors: Array<string>, product: ShopProduct): boolean {
    if (colors.length == 0) return true;
    return colors.includes(product.color) || colors.includes('');
  }
  filterPrices(priceRanges: Array<PriceRange>, product: ShopProduct): boolean {
    if (priceRanges.length == 0) return true;
    for (let i = 0; i < priceRanges.length; i++)
      if (
        (priceRanges[i].min <= product.price &&
          priceRanges[i].max >= product.price) ||
        (priceRanges[i].min == 0 && priceRanges[i].max == 0)
      )
        return true;
    return false;
  }
}

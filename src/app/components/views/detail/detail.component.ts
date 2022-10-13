import { Component, OnInit, Input } from '@angular/core';
import { ShopProduct } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  alsoLikeProducts: Array<ShopProduct> = [];
  productQuantity: number = 1;
  detailProduct: ShopProduct = {} as ShopProduct;
  ratingStatement: String = '<div class="text-primary mr-2">';
  constructor(private cartService: CartService, private productService: ProductService) {}
  
  ngOnInit(): void {
    this.setProduct(this.productService.getDetailProduct());
  }

  public decProduct ():void {
    if (this.productQuantity > 1) this.productQuantity -= 1;
  }
  public incProduct ():void {
    this.productQuantity += 1;
  }
  public addToCart () {
    this.cartService.addToCart(this.detailProduct, this.productQuantity);
  }

  public refreshProducts():void {
    this.alsoLikeProducts = this.productService.getProductsWithout(this.detailProduct);
  }

  public setProduct(product: ShopProduct):void {
    this.detailProduct = product;
    this.refreshProducts();
    this.generateRating();
  }

  private generateRating(): void { // TODO: Enhance later into an official component
    let i = 0;
    for (i = 0; i < this.detailProduct.rating - 0.5; i++) this.ratingStatement += '<small class="fa fa-star"></small>';
    if (this.detailProduct.rating - i == 0.5) {
      this.ratingStatement += '<small class="fa fa-star-half-alt"></small>';
      i += 1;
    }
    for (; i < 5; i++) this.ratingStatement += '<small class="far fa-star"></small>';
    this.ratingStatement += `</div><small class="pt-1">(${this.detailProduct.ratingCount})</small>`
  }
}

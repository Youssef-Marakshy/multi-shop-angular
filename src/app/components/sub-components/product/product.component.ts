import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {ShopProduct} from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { LikeService } from './../../../services/like.service';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ratingStatement: string = "";
  @Input() product: ShopProduct = {} as ShopProduct;
  constructor(private cartService: CartService, private likeService: LikeService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void { // TODO: Enhance later into an official component
    let i = 0;
    for (i = 0; i < this.product.rating - 0.5; i++) this.ratingStatement += '<small class="fa fa-star text-primary mr-1"></small>';
    if (this.product.rating - i == 0.5) {
      this.ratingStatement += '<small class="fa fa-star-half text-primary mr-1"></small>';
      i += 1;
    }
    for (; i < 5; i++) this.ratingStatement += '<small class="far fa-star text-primary mr-1"></small>';
    this.ratingStatement += `<small>(${this.product.ratingCount})</small>`
  }

  loadDetail(product: ShopProduct) {
    this.productService.setDetailProduct(product);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>  this.router.navigate(['detail']));
  }

  addToCart(product: ShopProduct) {
    this.cartService.addToCart(product);
  }

  addToLiked(product: ShopProduct) {
    this.likeService.addToLiked(product);
  }

  loadRoute(route: string) {
    
  }

}

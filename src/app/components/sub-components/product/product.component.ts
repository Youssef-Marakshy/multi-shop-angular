import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor(private cartService: CartService, private likeService: LikeService) {}

  ngOnInit(): void {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.order);
  }

  addToLiked(product: Product) {
    this.likeService.addToLiked(product);
  }
}

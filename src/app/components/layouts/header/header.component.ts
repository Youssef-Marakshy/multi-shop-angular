import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LikeService } from './../../../services/like.service';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService, public likeService: LikeService, private productService: ProductService) {}

  ngOnInit(): void {
  }

  public loadShopDetail():void {
    this.productService.setDetailProduct();
  }
}

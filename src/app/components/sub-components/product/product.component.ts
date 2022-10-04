import { Component, OnInit, Input } from '@angular/core';
import {ShopProduct} from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ratingStatement: string = "";
  @Input() product: ShopProduct = {} as ShopProduct;
  constructor() { }

  ngOnInit(): void {
    let i = 0;
    for (i = 0; i < this.product.rating - 0.5; i++) this.ratingStatement += '<small class="fa fa-star text-primary mr-1"></small>';
    if (this.product.rating - i == 0.5) {
      this.ratingStatement += '<small class="fa fa-star-half text-primary mr-1"></small>';
      i += 1;
    }
    for (; i < 5; i++) this.ratingStatement += '<small class="far fa-star text-primary mr-1"></small>';
    console.log(i, this.product.rating);
    this.ratingStatement += `<small>(${this.product.ratingCount})</small>`
  }
}

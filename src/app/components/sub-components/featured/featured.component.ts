import {
  Component,
  OnInit
} from '@angular/core';
import { ShopProduct } from './../../../interfaces/product';
import {
  ProductService
} from 'src/app/services/product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featuredProducts: Array < ShopProduct > = [];
  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.featuredProducts = this.ProductService.getFeaturedProducts();
  }
}

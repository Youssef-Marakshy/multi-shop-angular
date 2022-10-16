import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
declare const $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  productQuantity: number = 1;
  detailProduct: Product = {} as Product;
  alsoLikeProducts: Array<Product> = [];
  id: string;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    // this.runJqueryForCarousel();
    this.productService.getProducts().subscribe((data: any) => {
      this.alsoLikeProducts = data.data;
      this.detailProduct = this.alsoLikeProducts.filter(p => p._id.toString() == this.id)[0];
      this.alsoLikeProducts = this.alsoLikeProducts.filter(p => p._id.toString() !== this.id);
    });
    this.runJqueryForCarousel();
    // console.log(this.id);
  }

  loadProduct(prodID: number) {
    this.router.navigate(['./detail', prodID.toString()]).then(page => { window.location.reload(); });
  }

  public decProduct ():void {
    if (this.productQuantity > 1) this.productQuantity -= 1;
  }
  public incProduct ():void {
    this.productQuantity += 1;
  }

  public addToCart () {
    // this.cartService.addToCart(this.detailProduct, this.productQuantity);
  }

  runJqueryForCarousel() {
    $('.related-carousel').owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:2
          },
          768:{
              items:3
          },
          992:{
              items:4
          }
      }
    });
  }
}

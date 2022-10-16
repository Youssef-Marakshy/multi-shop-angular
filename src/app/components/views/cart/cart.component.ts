import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  order: Order = {} as Order;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.order = this.cartService.order;
  }

  deleteLine(i:number){
    this.order.deleteLine(i);
  }

  public proceedCheckout() {
    this.router.navigate(['checkout']);
  }
}

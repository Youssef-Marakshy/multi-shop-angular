import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/interfaces/order';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserInfo } from 'src/app/interfaces/user-info';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  order: Order = {} as Order;
  private userInfo: UserInfo = {} as UserInfo;
  orderTotal: number = 0;
  checkoutForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    countryState: new FormControl('', [Validators.required]),
    countryCity: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    paymentMethod: new FormControl('', [Validators.required]),
  });
  constructor(private cartService: CartService, private authService: AuthService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.order = this.cartService.order;
    console.log(this.order.orderDetails.length)
    this.order.orderDetails.forEach(ord => this.orderTotal += ord.price);
    this.userInfo = this.authService.loadLoginData();
    this.checkoutForm.patchValue({
      first_name: this.userInfo.first_name,
      last_name: this.userInfo.last_name,
      email: this.userInfo.email,
    });
  }

  placeOrder() {
     const orderBody = {
      sub_total_price: this.orderTotal,
      shipping: 10.0,
      total_price: this.orderTotal + 10,
      user_id: this.userInfo._id,
      order_date: "2022-01-01",
      order_details: this.order.orderDetails,
      shipping_info: {
        first_name: this.userInfo.first_name,
        last_name: this.userInfo.last_name,
        email: this.userInfo.email,
        mobile_number: this.checkoutForm.get('mobileNo')?.value,
        address1: this.checkoutForm.get('address1')?.value,
        address2: this.checkoutForm.get('address2')?.value,
        country: this.checkoutForm.get('country')?.value,
        city: this.checkoutForm.get('countryCity')?.value,
        state: this.checkoutForm.get('countryState')?.value,
        zipcode: this.checkoutForm.get('zipcode')?.value,
      }
    };

    this.httpClient.post(environment.APIUrl + 'orders', orderBody, { headers: {
      'Content-Type' : 'application/json',
      'x-access-token': this.authService.getToken()
    }}).subscribe(c => c, err => console.log(err));


    // Confirmed My Order is arr[2] when using GET orders
    /*
    this.httpClient.get(environment.APIUrl + 'orders', {
      headers: {
        'Content-Type' : 'application/json',
        'x-access-token': this.authService.getToken()
      }
    }).subscribe(c => console.log(c), err => console.log(err));
    */
  }
}

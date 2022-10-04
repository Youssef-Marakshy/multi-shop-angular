import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/views/cart/cart.component';
import { CheckoutComponent } from './components/views/checkout/checkout.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { DetailComponent } from './components/views/detail/detail.component';
import { HomeComponent } from './components/views/home/home.component';
import { ShopComponent } from './components/views/shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

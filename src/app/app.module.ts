import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { ShopComponent } from './components/views/shop/shop.component';
import { DetailComponent } from './components/views/detail/detail.component';
import { CartComponent } from './components/views/cart/cart.component';
import { CheckoutComponent } from './components/views/checkout/checkout.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { CategoriesComponent } from './components/sub-components/categories/categories.component';
import { CategoryComponent } from './components/sub-components/category/category.component';
import { FeaturedComponent } from './components/sub-components/featured/featured.component';
import { ProductComponent } from './components/sub-components/product/product.component';
import { RecentComponent } from './components/sub-components/recent/recent.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    CategoriesComponent,
    CategoryComponent,
    FeaturedComponent,
    ProductComponent,
    RecentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { ShopProduct } from './product';

export class Order {
  orderDetails: Array<OrderDetail>;
  constructor() {
    this.orderDetails = [];
  }
  addProduct(product: ShopProduct, quantity: number = 1) {
    let currentProduct = this.orderDetails.find(
      (x) => x.product.id == product.id
    );
    if (currentProduct != null) {
      console.log('Product found: ' + quantity);
      currentProduct.incQuantity(quantity);
    }
    else {
      console.log('New Order: ' + quantity);
      this.orderDetails.push(new OrderDetail(product, quantity));
    }

    localStorage.setItem('order', JSON.stringify(this));
  }

  incQuantity(i: number) {
    this.orderDetails[i].incQuantity();
    localStorage.setItem('order', JSON.stringify(this));
  }

  decQuantity(i: number) {
    this.orderDetails[i].decQuantity();
    localStorage.setItem('order', JSON.stringify(this));
  }

  deleteLine(i: number) {
    this.orderDetails.splice(i, 1);
    localStorage.setItem('order', JSON.stringify(this));
  }

  getSubTotal(): number {
    return this.orderDetails.map((x) => x.price).reduce((a, v) => (a += v));
  }

  getShipping(): number {
    return this.getSubTotal() * 0.05;
  }

  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }
}

export class OrderDetail {
  product: ShopProduct;
  quantity: number;
  price: number;
  constructor(product: ShopProduct, quant:number = 1) {
    this.product = product;
    this.quantity = quant;
    this.price = product.price - product.price * product.priceDiscount;
  }

  incQuantity(number: number = 1) {
    this.quantity += number;
    this.price =
      this.quantity *
      (this.product.price - this.product.price * this.product.priceDiscount);
  }
  decQuantity(number: number = 1) {
    if (this.quantity >= 1) {
      this.quantity -= number;
      this.price =
        this.quantity *
        (this.product.price - this.product.price * this.product.priceDiscount);
    }
  }
}

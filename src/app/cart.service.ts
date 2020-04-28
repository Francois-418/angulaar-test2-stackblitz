import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  provedIn: 'root'
})
export class CartService {

  items = [];

  constructor(
    private htttp: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}
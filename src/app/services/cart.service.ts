import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Morango', price: 15.50, amount: 1, imagem: '../../../assets/img/morango.png' },
    { id: 1, name: 'Cano PVC', price: 28.90, amount: 1, imagem: '../../../assets/img/canopvc.png' },
    { id: 2, name: 'Maçã (500g)', price: 6.24, amount: 1, imagem: '../../../assets/img/maca.png' },
    { id: 3, name: 'Papel higiênico', price: 3.76, amount: 1, imagem: '../../../assets/img/papelHigienico.png' }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -=1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

}

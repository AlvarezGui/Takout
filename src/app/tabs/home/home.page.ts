import { CarrinhoPage } from './../../carrinho/carrinho.page';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private rota: Router, private cartService: CartService, private modalCtrl: ModalController) { }

  async abrirPaginaCarrinho(){
    this.rota.navigateByUrl(`/carrinho`);
  }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(products) {
    this.cartService.addProduct(products);
  }

  async openCart() {
    let modal = await this.modalCtrl.create({
      component: CarrinhoPage,
      cssClass: 'carrinho.css'
    });
    modal.present();
  }

  adicionarCarrinho(){
    this.rota.navigateByUrl(`/carrinho`);
  }

  irPaginaLojaPage(){
    this.rota.navigateByUrl(`/loja-page`);
  }
}

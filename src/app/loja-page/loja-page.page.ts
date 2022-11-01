import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-loja-page',
  templateUrl: './loja-page.page.html',
  styleUrls: ['./loja-page.page.scss'],
})
export class LojaPagePage implements OnInit {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private rota: Router, private cartService: CartService, private modalCtrl: ModalController) { }

  favoritado = true;
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  favoritar(): void {
    this.favoritado = !this.favoritado;
  }

  abrirPaginaCarrinho(){
    this.rota.navigateByUrl(`/carrinho`)
  }
  
  voltar(){
    this.rota.navigateByUrl(`/tabs/menu`)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.page.html',
  styleUrls: ['./produto-page.page.scss'],
})
export class ProdutoPagePage implements OnInit {


  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  private currentNumber = 0;

  constructor(private rota: Router, private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  private mais() {
    this.currentNumber++;
  }
  
  private menos() {
    this.currentNumber--;
  }

  addToCart(products) {
    this.cartService.addProduct(products);
  }

  abrirPaginaCarrinho(){
    this.rota.navigateByUrl(`/carrinho`);
  }

  voltar(){
    this.rota.navigateByUrl(`/tabs/home`);
  }

}

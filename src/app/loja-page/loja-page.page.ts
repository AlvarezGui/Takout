import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loja-page',
  templateUrl: './loja-page.page.html',
  styleUrls: ['./loja-page.page.scss'],
})
export class LojaPagePage implements OnInit {

  constructor(private rota: Router) { }

  favoritado = true;
  ngOnInit() {
  }

  favoritar(): void {
    this.favoritado = !this.favoritado;
  }

  abrirPaginaCarrinho(){
    this.rota.navigateByUrl(`/carrinho`)
  }

}

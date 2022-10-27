import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private rota: Router) { }

  async abrirPaginaCarrinho(){
    this.rota.navigateByUrl(`/carrinho`);
  }

  ngOnInit() {
  }

  adicionarCarrinho(){
    this.rota.navigateByUrl(`/carrinho`);
  }

  irPaginaProdutoPage(){
    this.rota.navigateByUrl(`/produto-page`);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.page.html',
  styleUrls: ['./produto-page.page.scss'],
})
export class ProdutoPagePage implements OnInit {

  favoritado = true;
  constructor() { }

  ngOnInit() {
  }

  favoritar(): void {
    this.favoritado = !this.favoritado;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  constructor(private rota: Router) { }

  async voltarHome(){
    this.rota.navigateByUrl(`/tabs/home`)
  }

  ngOnInit() {
  }

}

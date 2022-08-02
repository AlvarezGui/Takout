import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private rota: Router) {}

  abrirPaginaCadastro(){
    this.rota.navigateByUrl(`/cadastro`)
  }

  abrirPaginaRecuperar(){
    this.rota.navigateByUrl(`/recuperar`)
  }

}

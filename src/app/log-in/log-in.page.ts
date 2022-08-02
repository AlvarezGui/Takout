import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.page.html',
  styleUrls: ['log-in.page.scss'],
})
export class LogInPage {

  constructor(private rota: Router) {}

  abrirPaginaCadastro(){
    this.rota.navigateByUrl(`/cadastro`)
  }

  abrirPaginaRecuperar(){
    this.rota.navigateByUrl(`/recuperar`)
  }

  abrirPaginaHome(){
    this.rota.navigateByUrl(`/home`)
  }

}

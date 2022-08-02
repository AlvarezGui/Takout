import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private rota: Router) { }

  abrirPaginaLogin(){
    this.rota.navigateByUrl(`/login`)
  }


  ngOnInit() {
  }

}

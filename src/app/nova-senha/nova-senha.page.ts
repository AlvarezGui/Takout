import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.page.html',
  styleUrls: ['./nova-senha.page.scss'],
})
export class NovaSenhaPage implements OnInit {

  constructor(private rota: Router) { }

  abrirPaginaLogin(){
    this.rota.navigateByUrl(`/log-in`);
  }



  ngOnInit() {
  }

}

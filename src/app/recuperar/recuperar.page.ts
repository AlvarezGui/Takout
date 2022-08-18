import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private rota: Router) { }

  abrirPaginaCodigo(){
    this.rota.navigateByUrl(`/codigo`)
  }

  voltarLogin(){
    this.rota.navigateByUrl(`/log-in`)
  }

  ngOnInit() {
  } 

}

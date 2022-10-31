import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit {

  constructor(private rota: Router) { }


  ngOnInit() {
    
  }
  
  abrirPaginaNovaSenha(){
    this.rota.navigateByUrl(`/nova-senha`)
  }

  voltarRec(){
    this.rota.navigateByUrl(`/recuperar`)
  }

}

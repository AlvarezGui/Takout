import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.page.html',
  styleUrls: ['./pagamentos.page.scss'],
})
export class PagamentosPage implements OnInit {

  constructor(private rota: Router) { }

  async voltarConta(){
    this.rota.navigateByUrl(`/tabs/conta`)
  }

  ngOnInit() {
  }

}

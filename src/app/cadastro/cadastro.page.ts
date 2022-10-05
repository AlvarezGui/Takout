/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../models/Cadastro';
import { AlertController } from '@ionic/angular';
import { CadastroService } from '../services/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public listaCadastros: Cadastro[] = [];

  constructor(private rota: Router, private cadaService: CadastroService, private alertController: AlertController) { }

  abrirPaginaLogin(){
    this.rota.navigateByUrl(`/log-in`);
  }

  abrirPaginaHome(){
    this.rota.navigateByUrl(`/tabs/home`);
  }

  ngOnInit() {
  }

  // botão buscar sem utilidade por enquanto

  buscarCadastros() {
    this.cadaService.buscarCadastro().subscribe(dadosRetorno => {
      this.listaCadastros = dadosRetorno.map(registro => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          senha: registro.payload.doc.data()['senha']
        }
      ));
    });
  }

  async deletarCadastro(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirma exclução dessa conta',
      buttons: [
        {
          text: 'Não',
          role: 'Cancel',
          handler: () => {

            },
          },
          {
            text: 'Sim',
            role: 'confirmar',
            handler: () => {
              this.cadaService.deletar(id);
          },
        },
      ],
    });
    await alert.present();
    this.buscarCadastros();
  }

}

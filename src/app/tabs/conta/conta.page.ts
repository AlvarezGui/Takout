import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  constructor(public alertController: AlertController, private rota: Router) { }


  async abrirPaginaPagamentos(){
    this.rota.navigateByUrl(`/pagamentos`)
  }

  async exibirAlertaSair(){
    const alert = await this.alertController.create({
      header: 'Sair',
      message: 'Você deseja sair ?',
      buttons: [
        {
          text: 'Sair',
          handler: () => {
            this.rota.navigateByUrl(`/log-in`)
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}

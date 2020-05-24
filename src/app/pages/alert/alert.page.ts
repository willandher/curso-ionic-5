import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }
  titulo: string;
  ngOnInit() {
    this.titulo = 'Titulo Original';
  }
  async changeTitulo() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Ingrese su nombre:',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        },
      ],
      buttons: [  {
        text: 'Cancel',
        role: 'cancel',
        handler: (blah) => {
          console.log('Cancelar');
        }
      }, {
        text: 'Ok',
        handler: (data) => {
          this.titulo = data.txtNombre;
        }
      }]
    });
    await alert.present();
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [  {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelar');
        }
      }, {
        text: 'Ok',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Boton Ok');
        }
      }]
    });
    await alert.present();
  }

}

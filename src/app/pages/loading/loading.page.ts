import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private  loadingCtlr: LoadingController ) { }

  loading : any;
  ngOnInit() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
    this.presentLoading('Espere');
  }

  async presentLoading( message: string) {
     this.loading = await this.loadingCtlr.create({
      cssClass: 'my-custom-class',
      message,
    });
    return this.loading.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtlr.create({
      cssClass: 'my-custom-class',
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

}

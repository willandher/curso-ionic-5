import { PopinfoComponent } from './../../components/popinfo/popinfo.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev){
    const  popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: ev,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();
    const {data} = await popover.onWillDismiss();
    console.log('Info data presente: ', data);

  }

}

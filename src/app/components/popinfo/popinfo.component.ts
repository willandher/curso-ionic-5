import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(40);

  constructor(private popOverCtrl: PopoverController) { }

  ngOnInit() {}

  onItem(i: number){
    console.log('Valor de litem: ', i);
    this.popOverCtrl.dismiss({
      item: i
    });

  }

}

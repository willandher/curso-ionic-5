import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild('lista', { static: false}) lista: IonList;
  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.usuarios = this.dataService.getUsers();
  }

      borrar(item){
        console.log('que onda borrar', item);
           this.lista.closeSlidingItems(); 
      }
      share(item){
        console.log('que onda share', item);
        this.lista.closeSlidingItems();
      }
      favorite(item){
        console.log('que onda favorite', item);
        this.lista.closeSlidingItems();
      }

}

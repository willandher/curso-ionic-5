import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albunes: any [] = [];
  textoBuscar = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAbulnes().subscribe(albunes =>{
      console.log(albunes);
      this.albunes = albunes;
    });
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

}

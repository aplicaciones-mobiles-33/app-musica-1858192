import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDbService } from '../firebase-db.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabsfavoritas',
  templateUrl: './tabsfavoritas.component.html',
  styleUrls: ['./tabsfavoritas.component.scss'],
})
export class TabsfavoritasComponent implements OnInit {
  favoritas = [];
  imageURL = '';
  volver(){
    this.loc.back();
  }
  constructor(
    private db: FirebaseDbService,
    private loc: Location,
    private rutaActiva: ActivatedRoute
  ) { }
  obtenerTabsFavoritos(){
    this.db.getCanciones().subscribe(
      response => {
        for(let res in response){
          if(response[res]['fav']){
            response[res]['key'] = res
            this.favoritas.push(response[res])
          }
        }
        this.imageURL = this.favoritas[0]['imageURL']
      }
    )
  }

  ngOnInit() {
    this.obtenerTabsFavoritos();
  }
}

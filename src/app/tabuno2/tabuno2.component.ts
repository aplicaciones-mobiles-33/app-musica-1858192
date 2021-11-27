import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tabuno2',
  templateUrl: './tabuno2.component.html',
  styleUrls: ['./tabuno2.component.scss'],
})
export class Tabuno2Component implements OnInit {
  tabuno2 = []
  artistaKey: Object = {}
  constructor(private db: FirebaseDbService) { }
  obtenerTabuno2(){
    this.db.getCanciones().subscribe(
      respuesta =>{
        for(let key in respuesta){
          respuesta[key]['key'] = key
          if(!(respuesta[key]['autor'] in this.artistaKey)){
            this.artistaKey[respuesta[key]['autor']] = key
          }
        }
        for(let artista in this.artistaKey){
          this.tabuno2.push(respuesta[this.artistaKey[artista]])
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerTabuno2();
  }
}

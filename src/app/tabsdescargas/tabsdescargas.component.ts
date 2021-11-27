import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tabsdescargas',
  templateUrl: './tabsdescargas.component.html',
  styleUrls: ['./tabsdescargas.component.scss'],
})
export class TabsdescargasComponent implements OnInit {
  canciones = []
  constructor(
    private db: FirebaseDbService
  ) {}
  obtenerTabsdescargas(){
    this.db.getCanciones().subscribe(
      respuesta => {
        for(let key in respuesta){
          if(respuesta[key]['descargada']){
            respuesta[key]['key'] = key;
            this.canciones.push(respuesta[key])
          }
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerTabsdescargas()
  }
}

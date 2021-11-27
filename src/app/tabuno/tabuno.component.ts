import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tabuno',
  templateUrl: './tabuno.component.html',
  styleUrls: ['./tabuno.component.scss'],
})
export class TabunoComponent implements OnInit {
  canciones = []
  constructor(private db: FirebaseDbService) { }
  obtenerCanciones(){
    this.db.getTabdos().subscribe(
      respuesta => {
        for(let key in respuesta){
          respuesta[key]['key'] = key
          this.canciones.push(respuesta[key])
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerCanciones();
  }
}

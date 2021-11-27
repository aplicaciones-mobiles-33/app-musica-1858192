import { Component, OnInit } from '@angular/core';
import { CancionModel } from '../cancion-model';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tabdos',
  templateUrl: './tabdos.component.html',
  styleUrls: ['./tabdos.component.scss'],
})
export class TabdosComponent implements OnInit {

  tabdos: CancionModel[] = [];
  constructor(private db: FirebaseDbService) { }
  obtenerTabdos(){
    this.db.getTabdos().subscribe(
      respuesta =>{
        for(let key in respuesta){
          respuesta[key]['key'] = key;
          this.tabdos.push(respuesta[key])
        }
      }
    )
  }
  ngOnInit() {
    this.obtenerTabdos();
  }
}

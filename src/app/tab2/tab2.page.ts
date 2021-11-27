import { Component } from '@angular/core';
import { CancionModel } from '../cancion-model';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  buscando: boolean;
  canciones: CancionModel[] = [];
  
  cancionesFiltradas = [];
  palabra_clave: string;
  constructor(private db: FirebaseDbService) { }
  obtenerCanciones(){
    this.db.getCanciones().subscribe(
      respuesta => {
        for(let key in respuesta){
          respuesta[key]['key'] = key
          this.canciones.push(respuesta[key])
        }
      }
    )
  }
  
  filtrarCanciones(){
    let filtro = this.palabra_clave.toLowerCase();
    this.cancionesFiltradas = []
    for(let c of this.canciones){
      if(c.titulo.toLowerCase().includes(filtro)
      || c.autor.toLowerCase().includes(filtro)){
        this.cancionesFiltradas.push(c)
      }
    }
  }
  ngOnInit() {
    this.buscando = false;
    this.palabra_clave = '';
    this.obtenerCanciones();
  }
}

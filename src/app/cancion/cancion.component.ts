import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDbService } from '../firebase-db.service';
import { CancionModel } from '../cancion-model';
import { connectListeners } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.scss'],
})
export class CancionComponent implements OnInit {
  cancionId: any;
  volver(){
    this.loc.back();
  }
  canciones = []
  constructor(
    private loc: Location,
    private rutaActiva: ActivatedRoute,
    private db: FirebaseDbService
  ) { }
  cancion: CancionModel = {
    titulo: '',
    imageURL: '',
    autor: '',
    favorita: false,
    descargada: false
  }
  obtenerDetalleCancion(param){
    this.db.getCancion(param).subscribe(
      respuesta =>{
        this.cancion['titulo'] = respuesta['titulo']
        this.cancion['imageURL'] = respuesta['imageURL']
        this.cancion['autor'] = respuesta['autor']
        this.cancion['favorita'] = respuesta['favorita']
        this.cancion['descargada'] = respuesta['descargada']
      }
    )
  }
  obtenerCanciones(){
    this.db.getCanciones().subscribe(
      respuesta => {
        for(let key in respuesta){
          if(key != this.cancionId){
            respuesta[key]['key'] = key
            this.canciones.push(respuesta[key])
          }
        }
      }
    )
  }
  hacerFav(){
    this.cancion.favorita = !this.cancion.favorita;
    this.db.putFav(this.cancionId, this.cancion.favorita).subscribe()
    let params = {
      nombre: 'Favoritas',
      canciones: []
    }
    let existe = false;
    this.db.getAllPlaylists().subscribe(
      respuesta=>{
        if(this.cancion.favorita){
          for(let key in respuesta){
            if(respuesta[key]['nombre']==params.nombre){
              existe = true;
              respuesta[key]['canciones'].push(this.cancionId);
              this.db.putPlaylists(key, respuesta[key]['canciones']).subscribe()
            }
          }
          if(!existe){
            params.canciones.push(this.cancionId)
            this.db.postPlaylists(params).subscribe();
          }
        }
        else{
          for(let key in respuesta){
            if(respuesta[key]['nombre']==params.nombre){
              existe = true;
              for(let c of respuesta[key]['canciones']){
                if(c != this.cancionId){
                  params.canciones.push(c);
                }
              }
              if(params.canciones.length > 0){
                this.db.putPlaylists(key, params.canciones).subscribe()
              } else{
                this.db.deletePlaylist(key).subscribe()
              }
            }
          }
        }
      }
    )
  }

  descargar(){
    this.cancion.descargada = !this.cancion.descargada;
    this.db.putDescargar(this.cancionId, this.cancion.descargada).subscribe();
  }
  ngOnInit() {
    this.cancionId = this.rutaActiva.snapshot.params.id;
    this.obtenerDetalleCancion(this.cancionId);
    this.obtenerCanciones();
  }

}

import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  playlistId: any;
  cancionesKey = []
  canciones = []
  imageURL = ''
  nombre_playlist: string = '';
  volver(){
    this.loc.back();
  }
  constructor(
    private db: FirebaseDbService,
    private loc: Location,
    private rutaActiva: ActivatedRoute
  ) { }
  obtenerDetallePlaylist(param){
    this.db.getPlaylist(param).subscribe(
      res =>{
        this.cancionesKey = res['canciones'];
        this.db.getCanciones().subscribe(
          out =>{
            for(let key of this.cancionesKey){
              out[key]['key'] = key;
              this.canciones.push(out[key])
            }
            this.imageURL = this.canciones[0]['imageURL']
          }
        )
        this.nombre_playlist = res['nombre']
      }
    )
  }
  ngOnInit() {
    this.playlistId = this.rutaActiva.snapshot.params.id;
    this.obtenerDetallePlaylist(this.playlistId)
  }

}

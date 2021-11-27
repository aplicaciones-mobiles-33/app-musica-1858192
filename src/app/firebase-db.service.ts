import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(
    private http: HttpClient
  ) {}
  resArray = [];
  getTabdos(){
    return this.http.get('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/tabdos.json')
  }
  getCancion(idCancion){
    return this.http.get('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/canciones/'+idCancion+'.json')
  }
  getCanciones(){
    return this.http.get('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/canciones.json')
  }
  getAllPlaylists(){
    return this.http.get('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/playlists.json')
  }
  getPlaylist(idPlaylist){
    return this.http.get('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/playlists/'+idPlaylist+'.json')
  }
  putPlaylists(playlistID, canciones){
    return this.http.put('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/playlists/'+playlistID+'/canciones.json', canciones)
  }
  postPlaylists(infoPlaylist){
    return this.http.post('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/playlists.json', infoPlaylist)
  }
  putFav(idCancion, favorita){
    return this.http.put('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/canciones/'+idCancion+'/fav.json', favorita)
  }
  deletePlaylist(idPlaylist){
    return this.http.delete('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/playlists/'+idPlaylist+'.json')
  }
  getArtista(idArtista){
    return this.http.get('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/canciones/'+idArtista+'.json')
  }
  putDescargar(idCancion, descargada){
    return this.http.put('https://app-musica-1858192-c73cf-default-rtdb.firebaseio.com/canciones/'+idCancion+'/descargada.json', descargada)
  }

}
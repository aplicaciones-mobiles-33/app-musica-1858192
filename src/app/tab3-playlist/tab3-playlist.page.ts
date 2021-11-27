import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tab3-playlist',
  templateUrl: './tab3-playlist.page.html',
  styleUrls: ['./tab3-playlist.page.scss'],
})
export class Tab3PlaylistPage implements OnInit {
  playlists: Playlist[] = []
  constructor(private db: FirebaseDbService) { }
  obtenerTab3Playlists(){
    this.db.getAllPlaylists().subscribe(
      res =>{
        for(let r in res){
          res[r]['key'] = r;
          this.db.getCancion(res[r].canciones[0]).subscribe(
            output =>{
              res[r]['imageURL'] = output['imageURL']
            }
          )
          this.playlists.push(res[r]);
        }
      }
    )
  }

  ngOnInit() {
    this.obtenerTab3Playlists();
  }
  
}

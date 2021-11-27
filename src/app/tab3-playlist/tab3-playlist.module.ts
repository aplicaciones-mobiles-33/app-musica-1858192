import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3PlaylistPageRoutingModule } from './tab3-playlist-routing.module';

import { Tab3PlaylistPage } from './tab3-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PlaylistPageRoutingModule
  ],
  declarations: [Tab3PlaylistPage]
})
export class Tab3PlaylistPageModule {}

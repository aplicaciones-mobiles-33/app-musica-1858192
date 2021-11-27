import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3PlaylistPage } from './tab3-playlist.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3PlaylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PlaylistPageRoutingModule {}

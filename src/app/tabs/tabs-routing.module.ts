import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'cancion/:id',
        loadChildren: () => import('../cancion/cancion.module').then(m => m.CancionModule)
      },
      {
        path: 'playlist/favoritas',
        loadChildren: () => import('../tabsfavoritas/tabsfavoritas.module').then(m => m.TabsfavoritasModule)
      },
      {
        path: 'playlist/:id', 
        loadChildren: () => import('../playlist/playlist.module').then(m => m.PlaylistModule)
      },
      {
        path: 'artista/:id',
        loadChildren: () => import('../artist/artist.module').then(m => m.ArtistModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
    children: [
      {
        path: 'tab3-playlist',
        loadChildren: () => import('../tab3-playlist/tab3-playlist.module').then(m=>m.Tab3PlaylistPageModule)
      },
      {
        path: 'tabsdescargas',
        loadChildren: () => import('../tabsdescargas/tabsdescargas.module').then(m => m.TabsdescargasModule)
      },
      {
        path: 'tabtres2',
        loadChildren: () => import('../tabtres2/tabtres2.module').then(m => m.Tabtres2PageModule)
      },
      {
        path: '',
        redirectTo: 'tab3-playlist',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}

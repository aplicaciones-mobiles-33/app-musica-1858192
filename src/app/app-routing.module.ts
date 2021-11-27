import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'tabtres2',
    loadChildren: () => import('./tabtres2/tabtres2.module').then( m => m.Tabtres2PageModule)
  },
  {
    path: 'tab3-playlist',
    loadChildren: () => import('./tab3-playlist/tab3-playlist.module').then( m => m.Tab3PlaylistPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

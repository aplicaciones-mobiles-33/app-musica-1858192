import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsdescargasComponent } from './tabsdescargas.component';

const routes: Routes = [
  {
    path: '',
    component: TabsdescargasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsdescargasRoutingModule {}
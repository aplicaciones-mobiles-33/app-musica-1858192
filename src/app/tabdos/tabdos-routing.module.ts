import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabdosComponent } from './tabdos.component';

const routes: Routes = [
  {
    path: '',
    component: TabdosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabdosRoutingModule {}
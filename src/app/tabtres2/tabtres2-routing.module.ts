import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabtres2Page } from './tabtres2.page';

const routes: Routes = [
  {
    path: '',
    component: Tabtres2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabtres2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabtres2PageRoutingModule } from './tabtres2-routing.module';

import { Tabtres2Page } from './tabtres2.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabtres2PageRoutingModule,
    RouterModule
  ],
  declarations: [Tabtres2Page],
  exports: [Tabtres2Page]
})
export class Tabtres2PageModule {}

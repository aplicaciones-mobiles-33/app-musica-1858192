import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tabuno2Component } from './tabuno2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Tabuno2Component],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [Tabuno2Component]
})
export class Tabuno2Module { }
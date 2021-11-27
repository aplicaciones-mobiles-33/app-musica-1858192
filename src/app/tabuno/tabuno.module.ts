import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabunoComponent } from './tabuno.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TabunoComponent],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule
  ],
  exports: [TabunoComponent]
})
export class TabunoModule { }
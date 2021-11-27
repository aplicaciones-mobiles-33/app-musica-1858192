import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabdosComponent } from './tabdos.component';
import { IonicModule } from '@ionic/angular';
import { TabdosRoutingModule } from './tabdos-routing.module';



@NgModule({
  declarations: [TabdosComponent],
  imports: [
    CommonModule,
    IonicModule,
    TabdosRoutingModule
  ],
  exports: [TabdosComponent]
})
export class TabdosModule { }
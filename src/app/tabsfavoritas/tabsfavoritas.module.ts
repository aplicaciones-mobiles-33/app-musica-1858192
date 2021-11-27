import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsfavoritasComponent } from './tabsfavoritas.component';
import { IonicModule } from '@ionic/angular';
import { TabsfavoritasRoutingModule } from './tabsfavoritas-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TabsfavoritasComponent],
  imports: [
    CommonModule,
    IonicModule,
    TabsfavoritasRoutingModule,
    RouterModule.forChild([{path: '', component: TabsfavoritasComponent}])
  ],
  exports: [TabsfavoritasComponent]
})
export class TabsfavoritasModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TabsdescargasComponent } from './tabsdescargas.component';
import { TabsdescargasRoutingModule } from './tabsdescargas-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsdescargasRoutingModule,
    RouterModule.forChild([{path: '', component: TabsdescargasComponent}])
  ],
  declarations: [TabsdescargasComponent],
  exports: [TabsdescargasComponent]
})
export class TabsdescargasModule {}

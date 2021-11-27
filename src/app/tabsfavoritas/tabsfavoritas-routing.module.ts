import { NgModule } from "@angular/core";
import { TabsfavoritasComponent } from "./tabsfavoritas.component";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
    {
        path: '',
        component: TabsfavoritasComponent
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class TabsfavoritasRoutingModule {}
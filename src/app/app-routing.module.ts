import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {CapitalComponent} from './capital/capital.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'capital', component: CapitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

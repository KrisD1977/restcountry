import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {CapitalComponent} from './capital/capital.component';
import {ResultsComponent} from './results/results.component';
import {NamesComponent} from './names/names.component';
import {LangComponent} from "./lang/lang.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'capital', component: CapitalComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'names', component: NamesComponent},
  {path: 'lang', component: LangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

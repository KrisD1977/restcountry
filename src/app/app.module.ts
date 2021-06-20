import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CapitalComponent } from './capital/capital.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { NamesComponent } from './names/names.component';
import { LangComponent } from './lang/lang.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CapitalComponent,
    ResultsComponent,
    NamesComponent,
    LangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

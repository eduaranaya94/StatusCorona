import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalsComponent } from './totals/totals.component';
import { HttpClientModule } from '@angular/common/http';
import { ListscasescountriesComponent } from './listscasescountries/listscasescountries.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalsComponent,
    ListscasescountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

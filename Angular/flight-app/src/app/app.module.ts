import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { CarrierComponent } from './carrier/carrier.component';
import { RouteComponent } from './route/route.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    CarrierComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

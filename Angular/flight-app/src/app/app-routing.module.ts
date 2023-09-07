import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { CarrierComponent } from './carrier/carrier.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  {path: "add", component: AddComponent},
  {path: "list", component: ListComponent},
  {path: "carrier", component: CarrierComponent},
  {path: "route", component: RouteComponent},
  {path: "**", redirectTo: "/add", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

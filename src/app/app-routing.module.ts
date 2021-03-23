import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from "../../../instagram/src/app/header/header.component";
import {WallComponent} from "./wall/wall.component";

const routes: Routes = [
  {path:'headers', component:HeaderComponent},
  {path:'wall', component:WallComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

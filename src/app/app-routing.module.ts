import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserlistComponent} from "./userlist/userlist.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserUpdateComponent} from "./user-update/user-update.component";

const routes: Routes = [
  {
    path: '',
   component: UserlistComponent,
    pathMatch: 'full'
  },
  {
    path:'user-add',
    component: UserAddComponent,

  },
  {
    path: 'user-update/:id',
    component: UserUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

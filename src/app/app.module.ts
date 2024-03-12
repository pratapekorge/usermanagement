import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
// import {MatCardModule} from "@angular/material/card";
// import {MatIconModule} from "@angular/material/icon";
//  import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserUpdateComponent } from './user-update/user-update.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./user.service";
import {AppconstantService} from "./appconstant.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserAddComponent,
    HeaderComponent,
    DrawerComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatCardModule,
    // MatIconModule
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule



  ],
  providers: [UserService, AppconstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }

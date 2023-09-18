import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultListComponent } from './components/default-list/default-list.component';
import { MenuSideBarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { LoginComponent } from './security/login/login.component';
import { SetoresModule } from './views/setores/setores.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultListComponent,
    MenuSideBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SetoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

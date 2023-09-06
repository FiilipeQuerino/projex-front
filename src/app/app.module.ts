import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './views/responsaveis/create/create.component';
import { ListComponent } from './views/responsaveis/list/list.component';
import { UpdateComponent } from './views/responsaveis/update/update.component';
import { DefaultListComponent } from './components/default-list/default-list.component';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent,
    DefaultListComponent,
    MenuSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

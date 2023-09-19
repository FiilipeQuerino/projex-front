import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericRouterComponent, SetoresRoutingModule } from './setores-routing.module';
import { FormsModule } from '@angular/forms';
import { SetoresListComponent } from './setores-list/setores-list.component';

@NgModule({
  declarations: [
    GenericRouterComponent,
    SetoresListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SetoresRoutingModule,
  ]
})

export class SetoresModule { }

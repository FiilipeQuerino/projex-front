import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProfessorCreateComponent } from './pages/professor-create/professor-create.component';
import { GenericRouterComponent, setoresRoutingModule } from './setores-routing.module';
// import { ProfessorListComponent } from './pages/professor-list/professor-list.component';
import { FormsModule } from '@angular/forms';
import { SetoresListComponent } from './setores-list/setores-list.component';
// import { ProfessorAtualizarComponent } from './pages/professor-atualizar/professor-atualizar.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    SetoresListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    setoresRoutingModule
  ]
})
export class ProfessorModule { }

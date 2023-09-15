import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { setoresCreateComponent } from './pages/setores-create/setores-create.component';
import { SetoresListComponent } from './setores-list/setores-list.component';
// import { setoresAtualizarComponent } from './pages/setores-atualizar/setores-atualizar.component';


@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const routes: Routes = [{
  path: '',
  children: [
    { path: 'setores', redirectTo:'setores/list', pathMatch: 'full'},
    // { path: 'setores/create', component: setoresCreateComponent },
    { path: 'setores/list', component: SetoresListComponent },
    // { path: 'setores/atualizar/:id', component: setoresAtualizarComponent }
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class setoresRoutingModule { }

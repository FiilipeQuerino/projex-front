import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SetoresListComponent } from './setores-list/setores-list.component';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'setores',
      redirectTo: 'setores/list',
      pathMatch: 'full'
    },
    {
      path: 'setores/list',
      component: SetoresListComponent
    },
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class SetoresRoutingModule { }

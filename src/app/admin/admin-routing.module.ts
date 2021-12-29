import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';

const routes: Routes = [
{path:'admin',component:AdminComponent,
children: [
  {
    path: 'adminlist' , component:AdminlistComponent
  }
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonlistComponent } from './personlist/personlist.component';

const routes: Routes = [
  {path:'',component: PersonComponent,
  children: [
    { path: 'person-list', component:PersonlistComponent }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { 
  constructor(){
    console.log('person module')
  }
}

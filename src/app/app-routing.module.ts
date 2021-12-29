import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CompanyModule } from './company/company.module';
import { AuthGuard } from './auth.guard';
import { MyloadGuardGuard } from './myload-guard.guard';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Registration', component: TemplateformComponent },
   {
     path:'company',
     loadChildren: ()=>import('../app/company/company.module').then(m=>m.CompanyModule),canLoad:[MyloadGuardGuard]}
   ,
   {
     path:'person',
     loadChildren: ()=>import('./person/person.module').then(m=>m.PersonModule)
    },
    { path: 'Login', component:ReactiveFormComponent },
 // { path: '**', component: PagenotfoundComponent },

  ]

@NgModule({
  declarations: [],
 // imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

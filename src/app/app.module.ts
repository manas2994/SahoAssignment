import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ThemeDirective } from './theme.directive';
import { MyNgifDirective } from './my-ngif.directive';

//import { CompanyModule } from './company/company.module';
//import { PersonModule } from './person/person.module';
//import { CompanyRoutingModule } from './company/company-routing.module';
//import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    PagenotfoundComponent,
    HomeComponent,
    TemplateformComponent,
    ReactiveFormComponent,
    ThemeDirective,
    MyNgifDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientInMemoryWebApiModule,
    AppRoutingModule,
    ReactiveFormsModule,
   // CompanyModule,
    //PersonModule,
   // AdminModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('app module')
  }
}

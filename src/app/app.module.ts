import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './registration/registration.service';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';

 const routes: Routes = [
   { path: 'registration', component: RegistrationComponent },
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent },
   { path: 'registration-success', component: RegistrationSuccessComponent },
   { path: '', component: HomeComponent }
 ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
  providers: [RegistrationService],
  bootstrap: [AppComponent]

})
export class AppModule { }

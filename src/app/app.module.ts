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
import { ApiService } from './apiservice/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AgGridModule } from 'ag-grid-angular';

 const routes: Routes = [
   { path: 'registration', component: RegistrationComponent },
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent },
   { path: 'viewusers', component: ViewusersComponent},
   { path: 'product', component: ProductComponent },
   { path: 'productlist', component: ProductlistComponent },
   { path: 'registration-success', component: RegistrationSuccessComponent },
   { path: '', component: HomeComponent }
 ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationSuccessComponent,
    ViewusersComponent,
    ProductComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [RegistrationService, ApiService],
  bootstrap: [AppComponent]

})
export class AppModule { }

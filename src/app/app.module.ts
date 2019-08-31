import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OwnersComponent } from './owners/owners.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { LoginComponent } from './login/login.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ApplicationComunitiesComponent } from './application-comunities/application-comunities.component';
import { ApplicationFooterComponent } from './application-comunities/application-footer/application-footer.component';
import { ApplicationHeaderComponent } from './application-comunities/application-header/application-header.component';
import { BodyComponent } from './application-comunities/body/body.component';
import { FacturasComponent } from './application-comunities/facturas/facturas.component';
import { RecibosComponent } from './application-comunities/recibos/recibos.component';
import { BancosComponent } from './application-comunities/bancos/bancos.component';
import { ComunidadesComponent } from './application-comunities/comunidades/comunidades.component';
import { CookieService } from 'ngx-cookie-service'
import { AuthGuard } from './guards/auth.guard';
import { FilterPipe } from './pipes/filter.pipe';
import { NotFound404Component } from './not-found404/not-found404.component';
import { GoTopButtonComponent } from './go-top-button/go-top-button.component';

const routes: Routes = [
  { path: 'about', component: WrapperComponent },
  { path: 'signup', component: WrapperComponent },
  { path: 'how-works', component: WrapperComponent },
  { path: 'login', component: WrapperComponent },
  { path: 'bancos', component: BancosComponent, canActivate: [AuthGuard] },
  { path: 'comunidades', component: ComunidadesComponent, canActivate: [AuthGuard] },
  { path: 'facturas', component: FacturasComponent, canActivate: [AuthGuard] },
  { path: 'recibos', component: RecibosComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'application', component: ApplicationComunitiesComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFound404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    FormComponent,
    HomeComponent,
    AdminComponent,
    OwnersComponent,
    HowWorksComponent,
    LoginComponent,
    WrapperComponent,
    ApplicationComunitiesComponent,
    ApplicationFooterComponent,
    ApplicationHeaderComponent,
    BodyComponent,
    FacturasComponent,
    RecibosComponent,
    BancosComponent,
    ComunidadesComponent,
    FilterPipe,
    NotFound404Component,
    GoTopButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ServiceService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule} from './layouts';
import {  ChangePasswordFormModule,  CreateAccountFormModule,  FooterModule,  LoginFormModule,  ResetPasswordFormModule} from './shared/components';
import {AppInfoService, AuthService, ScreenService} from './shared/services';
import {UnauthenticatedContentModule} from './unauthenticated-content';
import {CidadeEstadoService} from "./shared/services/cidade-estado.service";
import {DxSelectBoxModule} from "devextreme-angular";
import {Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {SelCidadeEstadoComponent} from "./shared/components/sel-cidade-estado/sel-cidade-estado.component";



@NgModule({
  declarations: [
    AppComponent,
    SelCidadeEstadoComponent

  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    DxSelectBoxModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    CidadeEstadoService
  ],
  exports: [
    SelCidadeEstadoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

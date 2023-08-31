import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule} from './layouts';
import {  ChangePasswordFormModule, CreateAccountFormModule, FooterModule, LoginFormModule, ResetPasswordFormModule} from './shared/components';
import {AppInfoService, AuthService, ScreenService} from './shared/services';
import {UnauthenticatedContentModule} from './unauthenticated-content';
import {CidadeEstadoService} from "./shared/services/cidade-estado.service";
import {DxSelectBoxModule} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {  SelectBoxCidadeEstadoModule} from "./shared/components/select-box-cidade-estado/select-box-cidade-estado.component";


@NgModule({
  declarations: [
    AppComponent

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
    AppRoutingModule,
    SelectBoxCidadeEstadoModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    CidadeEstadoService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

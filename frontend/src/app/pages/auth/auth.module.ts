import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { NativeScriptModule } from '@nativescript/angular';


@NgModule({
  declarations: [],
  imports: [
    NativeScriptModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

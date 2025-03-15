import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "@nativescript/angular";

import { OrdersRoutingModule } from "./orders-routing.module";

@NgModule({
  declarations: [],
  imports: [NativeScriptModule, OrdersRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
  
})
export class OrdersModule {}

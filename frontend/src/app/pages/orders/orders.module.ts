import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "@nativescript/angular";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersComponent } from "./orders.component";

@NgModule({
  declarations: [OrdersComponent],
  imports: [NativeScriptModule, OrdersRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
  
})
export class OrdersModule {}

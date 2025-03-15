import { Component } from "@angular/core";
import { Page } from "@nativescript/core";

@Component({
  selector: "app-orders",

  templateUrl: "./orders.component.html",
  styleUrl: "./orders.component.scss",
})
export class OrdersComponent {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }
}

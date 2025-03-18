import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-order-details',
  
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }
}

import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-discounts',
  
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.scss'
})
export class DiscountsComponent {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }
}

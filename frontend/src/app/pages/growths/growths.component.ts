import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-growths',
   
  templateUrl: './growths.component.html',
  styleUrl: './growths.component.scss'
})
export class GrowthsComponent {
   constructor(
    private _page: Page,
  ) {
    this._page.actionBarHidden = true;
  }

}

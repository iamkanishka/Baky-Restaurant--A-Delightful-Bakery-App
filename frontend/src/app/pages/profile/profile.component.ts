import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-profile',
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    constructor(private _page: Page) {
      this._page.actionBarHidden = true;
    }
}

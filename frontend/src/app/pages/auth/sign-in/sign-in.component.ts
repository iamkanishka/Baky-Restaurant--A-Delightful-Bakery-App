import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-sign-in',
  
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }
}

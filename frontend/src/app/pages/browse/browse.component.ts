import { Component, OnInit } from '@angular/core'
import { Page } from "@nativescript/core";


@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {
 constructor(
  private _page: Page,
) {
  this._page.actionBarHidden = true;
}


  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }
}

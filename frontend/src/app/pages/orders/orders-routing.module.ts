import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from '@nativescript/core';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { 

    constructor(private _page: Page) {
      this._page.actionBarHidden = true;
    }

}

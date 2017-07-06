import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routing } from './app.route';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user.component';
import { AboutComponent } from './component/about.component';

@NgModule({
  imports: [BrowserModule, Routing],
  declarations: [AppComponent, UserComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

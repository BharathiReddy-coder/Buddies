import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BuddiesComponent } from '../buddies/buddies.component';
import { BharathiComponent } from '../bharathi/bharathi.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,BuddiesComponent,BharathiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MwMediaItemComponent } from './Mycomponents/mw-media-item/mw-media-item.component';

@NgModule({
  declarations: [AppComponent, MwMediaItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MwMediaItemComponent } from './Mycomponents/mw-media-item/mw-media-item.component';
import { NgForDataComponent } from './MyComponents/ng-for-data/ng-for-data.component';
import { FormComponentComponent } from './MyComponents/form-component/form-component.component';

@NgModule({
  declarations: [AppComponent, MwMediaItemComponent, NgForDataComponent, FormComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

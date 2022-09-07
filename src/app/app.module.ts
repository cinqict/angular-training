import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core/core.module';
import { OverviewModule } from './overview/overview.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, OverviewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

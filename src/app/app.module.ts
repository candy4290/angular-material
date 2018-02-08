import { appRouting } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// import { LayoutModule } from 'angular-xyy';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    HttpModule,
    appRouting,
    // LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AgmCoreModule } from '@agm/core';
import { SampleModule } from 'agm-direction';

@Component({
  selector: 'app',
  template: `
  <h1>Agm-Direction Playground - <a href="https://github.com/explooosion/Agm-Direction" target="_blank">Github</a></h1>
  <button type="button" (click)="getDirection()">Get</button>
  <agm-map [latitude]="lat" [longitude]="lng">
    <agm-direction *ngIf="dir" [origin]="dir.origin" [destination]="dir.destination"></agm-direction>
  </agm-map>
  `
})
class AppComponent {

  lat: Number = 24.799448;
  lng: Number = 120.979021;
  zoom: Number = 14;

  dir = undefined;

  getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    }
  }

}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: '',
    }),
    SampleModule
  ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
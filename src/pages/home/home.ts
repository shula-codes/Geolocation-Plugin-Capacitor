import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Plugins } from "@capacitor/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  PrintCoordinates = {
    longitude: 0,
    latitude: 0
  }

    constructor(public navCtrl: NavController, public navParams: NavParams, private zone: NgZone) {

  }

  async getCurrentPosition(){
    const coordinates = await Plugins.Geolocation.getCurrentPosition({
      timeout: 30000
    })
    this.zone.run(() => {
      this.PrintCoordinates = coordinates.coords;
    });
    
     
  }

}

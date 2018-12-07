import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'leaflet-routing-sample';

  private map: L.Map = null;

  ngOnInit() {
                    // id da div
    this.map = L.map('map')
      .setView([-25.441105,	-49.276855], 13);

    L.tileLayer
      .provider('OpenStreetMap.Mapnik')
      .addTo(this.map);

    L.Routing.control({
      waypoints: [
        L.latLng(-25.412842, -49.268394),
        L.latLng(-23.479179, -52.012160)
      ]
    }).addTo(this.map);
  }

}

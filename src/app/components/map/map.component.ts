/*
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  constructor() { }
  ngOnInit() {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2FudHR1OTgiLCJhIjoiY2p2OXEyeTUzMHJpOTRhbXl5ZzB0dnNjcCJ9.a4mcYAGt2nhOZpAvI-xUvA";
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }

}
*/
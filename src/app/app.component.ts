import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uso de Mapa de Google';
  position = {
    lat: -27.919432,
    lng: -55.752082
  }
  label = {
    color: "red",
    text: "Apóstoles, Misiones"}
}

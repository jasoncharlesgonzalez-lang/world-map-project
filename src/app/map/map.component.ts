import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output() countrySelected = new EventEmitter<string>();

  selectCountry(event: MouseEvent) {
    const target = event.target as SVGPathElement;
    const countryId = target.id; // Assuming 'id' attribute contains the country code
    if (countryId) {
      this.countrySelected.emit(countryId);
    }
  }
}






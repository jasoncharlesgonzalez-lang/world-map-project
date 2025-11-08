import { Component } from '@angular/core';
import { CountryInfoService } from './country-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountry: any = {};
  additionalProperty1Label: string = '';
  additionalProperty2Label: string = '';

  constructor(private countryInfoService: CountryInfoService) { }

  getCountryDetails(countryCode: string) {
    this.countryInfoService.getWorldBankInfo(countryCode).subscribe(data => {
      this.selectedCountry = {
        name: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        lendingType: data[1][0].lendingType,
        latitude: data[1][0].latitude
      };
    });
  }
}


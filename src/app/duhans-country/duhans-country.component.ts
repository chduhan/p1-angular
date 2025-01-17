import { Component, Input } from '@angular/core';
import { DuhansCountry } from '../classDuhans';
@Component({
  selector: 'app-duhans-country',
  templateUrl: './duhans-country.component.html',
  styleUrl: './duhans-country.component.css'
})
export class DuhansCountryComponent {
  @Input() duhansData!: DuhansCountry;

   

}

import { Component, Input } from '@angular/core';
import { DuhansPersonal } from '../classDuhans';
import { DuhansCountry } from '../classDuhans';
@Component({
  selector: 'app-duhans-pics',
  templateUrl: './duhans-pics.component.html',
  styleUrl: './duhans-pics.component.css'
})
export class DuhansPicsComponent {
  @Input() duhansMi!: DuhansPersonal;
  @Input() duhansCa!: DuhansCountry;

}

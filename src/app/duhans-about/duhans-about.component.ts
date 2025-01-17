import { Component, Input } from '@angular/core';
import { DuhansPersonal } from '../classDuhans';
@Component({
  selector: 'app-duhans-about',
  templateUrl: './duhans-about.component.html',
  styleUrl: './duhans-about.component.css'
})
export class DuhansAboutComponent {

  @Input() duhansMe!: DuhansPersonal;

  
}

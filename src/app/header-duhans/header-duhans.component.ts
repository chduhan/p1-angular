import { Component, Input } from '@angular/core';
import { DuhansPersonal } from '../classDuhans';
@Component({
  selector: 'app-header-duhans',
  templateUrl: './header-duhans.component.html',
  styleUrl: './header-duhans.component.css'
})
export class HeaderDuhansComponent {
 
  @Input() duhansChild!: DuhansPersonal
  cdate = new Date;
}

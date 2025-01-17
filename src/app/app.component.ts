import { Component } from '@angular/core';
import { DuhansPersonal } from './classDuhans';
import { DuhansCountry } from './classDuhans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A1duhans';

  PERduhans: DuhansPersonal ={
    duhansFullName:'Sachin Duhan' , duhansEmail: 'duhan.sachin@outlook.com'  , duhansID: 991701782, duhansLogin:'duhans' , duhansHomeCampus:'SHERIDAN DAVIS', duhansImage: 'me.png'
  }
  CTRYduhans: DuhansCountry={
    duhansCountryBirthName: 'INDIA' , duhansBirthID: 356, duhansCapital: 'Delhi' , duhansAverageSalary: 54000.00, duhansCountryFlag: 'flag.png'
  }
}

import { Component } from '@angular/core';
import { personalInfo } from './chhetriaclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chhetriaFEExam'; 

  chhetriaVerify: personalInfo ={
    'chhetriaName': 'Aakriti Chhetri',
    'chhetriaID':991702857,
    'chhetriaLogin':'chhetria',
    'chhetriaEmail':'chhetria@sheridancollege.ca'
  };
}

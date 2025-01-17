import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { personalInfo } from '../chhetriaclass';

@Component({
  selector: 'app-form-chhetria',
  templateUrl: './form-chhetria.component.html',
  styleUrl: './form-chhetria.component.css'
})
export class FormChhetriaComponent {
  
  formchhetria = new FormGroup({
    'ID':new FormControl(991702857),
    'Login': new FormControl('chhetria')
  });

}

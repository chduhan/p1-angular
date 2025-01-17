import { Component } from '@angular/core';
import { ServiceFEService } from '../service-fe.service';

@Component({
  selector: 'app-service-chhetria',
  templateUrl: './service-chhetria.component.html',
  styleUrl: './service-chhetria.component.css'
})
export class ServiceChhetriaComponent {
  constructor(private chhetriaService: ServiceFEService){}

  displayInfo(){
    this.chhetriaService.serviceInfo();
  }

}

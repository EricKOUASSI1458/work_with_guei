import { Component, OnInit } from '@angular/core';

import { InterfaceOfService } from '../interface-of-service';
import { HealthService } from '../services/healths/health.service';
import { EducationService } from '../services/educations/education.service';
import { SecureService } from '../services/secures/secure.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  healths: InterfaceOfService[] = [];
  educations : InterfaceOfService[] = [];
  secures : InterfaceOfService[] = [];

  constructor(private healthService: HealthService, private educationService: EducationService,
    private secureService: SecureService) { }

  ngOnInit() {
    this.getHealths();
    this.getEducations();
    this.getSecures();
  }

  getHealths():void{
    this.healthService.getHealths().subscribe(healths => this.healths = healths.slice(1, 7));
  }

  getEducations():void{
    this.educationService.getEducations().subscribe(educations => this.educations = educations.slice(1, 7));
  }

  getSecures():void{
    this.secureService.getSecures().subscribe(secures => this.secures = secures.slice(1, 7));
  }

}
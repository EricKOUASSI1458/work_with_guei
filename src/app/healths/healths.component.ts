import { Component, OnInit } from '@angular/core';
import { InterfaceOfService } from '../interface-of-service';
import { HealthService } from  '../services/healths/health.service';

@Component({
  selector: 'app-healths',
  templateUrl: './healths.component.html',
  styleUrls: ['./healths.component.scss']
})
export class HealthsComponent implements OnInit {

  constructor(private healthService: HealthService) { }

  healths : InterfaceOfService[];

  ngOnInit(): void {
  	this.gethealths();
  }

  gethealths(): void{
  	this.healthService.getHealths().subscribe(healths => this.healths = healths);
  }

}

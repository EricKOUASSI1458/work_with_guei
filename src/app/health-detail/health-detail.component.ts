import { Component, OnInit } from '@angular/core';
import { InterfaceOfService } from '../interface-of-service';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { HealthService }  from '../services/healths/health.service';

@Component({
  selector: 'app-health-detail',
  templateUrl: './health-detail.component.html',
  styleUrls: ['./health-detail.component.scss']
})
export class HealthDetailComponent implements OnInit {
	health : InterfaceOfService;
	title: string = 'MORE INFOR ABOUT THIS SERVICE';

  	constructor(private location: Location, private healthService: HealthService, private route :ActivatedRoute) { }

  	ngOnInit(): void {
  		this.getHealth();
  	}

  	getHealth(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.healthService.getHealth(id).subscribe(health => this.health = health);
    }

    goBack():void{
  		this.location.back();
  	}

}

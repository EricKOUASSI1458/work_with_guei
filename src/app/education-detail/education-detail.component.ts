import { Component, OnInit } from '@angular/core';
import { InterfaceOfService } from '../interface-of-service';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { EducationService }  from '../services/educations/education.service';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent implements OnInit {
	education : InterfaceOfService;
	title: string = 'MORE INFOR ABOUT THIS SERVICE';

	constructor(private location: Location, private educationService: EducationService,
	 private route :ActivatedRoute) { }

	ngOnInit(): void {
  		this.getEducation();
  	}

  	getEducation(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.educationService.getEducation(id).subscribe(education => this.education = education);
    }

    goBack():void{
  		this.location.back();
  	}
}

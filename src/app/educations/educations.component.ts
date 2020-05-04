import { Component, OnInit } from '@angular/core';
import { InterfaceOfService } from '../interface-of-service';
import { EducationService } from  '../services/educations/education.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {

	constructor(private educationService: EducationService) { }

	educations : InterfaceOfService[];

	ngOnInit(): void {
		this.gethealths();
	}

	gethealths(): void{
		this.educationService.getEducations().subscribe(educations => this.educations = educations);
	}

}

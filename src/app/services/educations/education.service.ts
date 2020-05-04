import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InterfaceOfService } from '../../interface-of-service';
import { EDUCATIONS } from '../../mock-educations';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducations() : Observable<InterfaceOfService[]>{
  	return of(EDUCATIONS);
  }

  getEducation(id: number) : Observable<InterfaceOfService>{
  	return of(EDUCATIONS.find(education => education.id === id));
  }
}

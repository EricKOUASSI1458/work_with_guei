import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InterfaceOfService } from '../../interface-of-service';
import { HEALTHS } from '../../mock-healths';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor() { }

  getHealths() : Observable<InterfaceOfService[]>{
  	return of(HEALTHS);
  }

  getHealth(id: number) : Observable<InterfaceOfService>{
  	return of(HEALTHS.find(health => health.id === id));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InterfaceOfService } from '../../interface-of-service';
import { SECURES } from '../../mock-secures';

@Injectable({
  providedIn: 'root'
})
export class SecureService {

  constructor() { }

  getSecures() : Observable<InterfaceOfService[]>{
  	return of(SECURES);
  }

  getSecure(id: number) : Observable<InterfaceOfService>{
  	return of(SECURES.find(secure => secure.id === id));
  }
}

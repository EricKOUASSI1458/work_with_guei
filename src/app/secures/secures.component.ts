import { Component, OnInit } from '@angular/core';
import { InterfaceOfService } from '../interface-of-service';
import { SecureService } from  '../services/secures/secure.service';

@Component({
  selector: 'app-secures',
  templateUrl: './secures.component.html',
  styleUrls: ['./secures.component.scss']
})
export class SecuresComponent implements OnInit {

	constructor(private secureService: SecureService) { }

	secures : InterfaceOfService[];

  	ngOnInit(): void {
  		this.gethealths();
  	}

  	gethealths(): void{
  		this.secureService.getSecures().subscribe(secures => this.secures = secures);
  	}

}

import { Component, OnInit } from '@angular/core';
import { InterfaceOfService } from '../interface-of-service';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { SecureService }  from '../services/secures/secure.service';

@Component({
  selector: 'app-secure-detail',
  templateUrl: './secure-detail.component.html',
  styleUrls: ['./secure-detail.component.scss']
})
export class SecureDetailComponent implements OnInit {
	secure : InterfaceOfService;
	title: string = 'MORE INFOR ABOUT THIS SERVICE';

	constructor(private location: Location, private secureService: SecureService,
	 private route :ActivatedRoute) { }

	
	ngOnInit(): void {
  		this.getSecure();
  	}

  	getSecure(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.secureService.getSecure(id).subscribe(secure => this.secure = secure);
    }

    goBack():void{
  		this.location.back();
  	}

}

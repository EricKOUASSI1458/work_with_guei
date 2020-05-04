import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ngxLoadingAnimationTypes, NgxLoadingComponent }  from 'ngx-loading';
import { Router } from '@angular/router';


const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';

@Component({
  selector: 'app-form-connect',
  templateUrl: './form-connect.component.html',
  styleUrls: ['./form-connect.component.scss']
})
export class FormConnectComponent implements OnInit {
	@ViewChild('ngxLoading', { static: false }) ngxLoadingComponent: NgxLoadingComponent;
  	@ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  	public loading = true;
  	public primaryColour = PrimaryWhite;
  	public secondaryColour = SecondaryGrey;
  	public coloursEnabled = false;
  	public loadingTemplate: TemplateRef<any>;
  	public config = { animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };

  constructor(private sanitizer: DomSanitizer, private route: Router) { }

  	show: boolean;

  	ngOnInit(): void {
  	}


    showLaoder(): void{
      this.show = true;

      setTimeout(() => {
        this.show = false;
        this.route.navigate(['dashboard']);
        console.log('saalut');
      }, 3000);
    }


  	

}

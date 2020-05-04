import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TestsComponent }  from './tests/tests.component';
import { FormConnectComponent }  from './form-connect/form-connect.component';
import { FormRegisterComponent }  from './form-register/form-register.component';

import { HealthsComponent }  from './healths/healths.component';
import { HealthDetailComponent }  from './health-detail/health-detail.component';

import { EducationsComponent }  from './educations/educations.component';
import { EducationDetailComponent }  from './education-detail/education-detail.component';

import { SecuresComponent }  from './secures/secures.component';
import { SecureDetailComponent }  from './secure-detail/secure-detail.component';




const routes: Routes = [
	
	{path:'tests', component: TestsComponent},
	{path:'dashboard', component: DashboardComponent},
	{path:'form', component: FormConnectComponent},
	{path:'formRegister', component: FormRegisterComponent},
	{path:'healths', component: HealthsComponent},
	{path:'detailHealth/:id', component: HealthDetailComponent},

	{path:'educations', component: EducationsComponent},
	{path:'detailEducation/:id', component: EducationDetailComponent},

	{path:'secures', component: SecuresComponent},
	{path:'detailSecure/:id', component: SecureDetailComponent},


	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

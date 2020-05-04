import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthsComponent } from './healths.component';

describe('HealthsComponent', () => {
  let component: HealthsComponent;
  let fixture: ComponentFixture<HealthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

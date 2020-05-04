import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureDetailComponent } from './secure-detail.component';

describe('SecureDetailComponent', () => {
  let component: SecureDetailComponent;
  let fixture: ComponentFixture<SecureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuresComponent } from './secures.component';

describe('SecuresComponent', () => {
  let component: SecuresComponent;
  let fixture: ComponentFixture<SecuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveLoanComponent } from './have-loan.component';

describe('HaveLoanComponent', () => {
  let component: HaveLoanComponent;
  let fixture: ComponentFixture<HaveLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

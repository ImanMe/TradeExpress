import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVINComponent } from './get-vin.component';

describe('GetVINComponent', () => {
  let component: GetVINComponent;
  let fixture: ComponentFixture<GetVINComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradedriverComponent } from './tradedriver.component';

describe('TradedriverComponent', () => {
  let component: TradedriverComponent;
  let fixture: ComponentFixture<TradedriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradedriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradedriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POQComponent } from './poq.component';

describe('POQComponent', () => {
  let component: POQComponent;
  let fixture: ComponentFixture<POQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

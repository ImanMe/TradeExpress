import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeHeadDemoComponent } from './type-head-demo.component';

describe('TypeHeadDemoComponent', () => {
  let component: TypeHeadDemoComponent;
  let fixture: ComponentFixture<TypeHeadDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypeHeadDemoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeHeadDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNavButtonComponent } from './big-nav-button.component';

describe('BigNavButtonComponent', () => {
  let component: BigNavButtonComponent;
  let fixture: ComponentFixture<BigNavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigNavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

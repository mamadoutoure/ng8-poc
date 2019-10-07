import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovedComponent } from './improved.component';

describe('ImprovedComponent', () => {
  let component: ImprovedComponent;
  let fixture: ComponentFixture<ImprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

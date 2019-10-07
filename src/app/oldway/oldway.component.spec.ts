import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldwayComponent } from './oldway.component';

describe('OldwayComponent', () => {
  let component: OldwayComponent;
  let fixture: ComponentFixture<OldwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

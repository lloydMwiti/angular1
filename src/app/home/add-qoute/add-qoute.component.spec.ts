import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQouteComponent } from './add-qoute.component';

describe('AddQouteComponent', () => {
  let component: AddQouteComponent;
  let fixture: ComponentFixture<AddQouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

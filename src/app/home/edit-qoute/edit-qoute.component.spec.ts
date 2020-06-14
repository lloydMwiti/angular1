import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQouteComponent } from './edit-qoute.component';

describe('EditQouteComponent', () => {
  let component: EditQouteComponent;
  let fixture: ComponentFixture<EditQouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

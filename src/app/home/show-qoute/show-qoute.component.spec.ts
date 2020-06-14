import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQouteComponent } from './show-qoute.component';

describe('ShowQouteComponent', () => {
  let component: ShowQouteComponent;
  let fixture: ComponentFixture<ShowQouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowQouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

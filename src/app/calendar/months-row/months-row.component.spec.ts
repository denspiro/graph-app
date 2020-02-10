import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsRowComponent } from './months-row.component';

describe('MonthsRowComponent', () => {
  let component: MonthsRowComponent;
  let fixture: ComponentFixture<MonthsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

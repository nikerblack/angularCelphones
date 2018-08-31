import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSearchComponent } from './phone-search.component';

describe('PhoneSearchComponent', () => {
  let component: PhoneSearchComponent;
  let fixture: ComponentFixture<PhoneSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

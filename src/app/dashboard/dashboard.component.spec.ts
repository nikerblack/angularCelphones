import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { PhoneSearchComponent } from '../phone-search/phone-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PHONES } from '../mock-phones';
import { PhoneService } from '../phone.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let phoneService;
  let getPhonesSpy;

  beforeEach(async(() => {
    phoneService = jasmine.createSpyObj('PhoneService', ['getPhones']);
    getPhonesSpy = phoneService.getPHones.and.returnValue( of(PHONES) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        PhoneSearchComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: PhoneService, useValue: phoneService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Phones" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Phones');
  });

  it('should call phoneService', async(() => {
    expect(getPhonesSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));
});

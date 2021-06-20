import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';
import { ApiService } from "../api.service";
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from '../app-routing.module';
import { Observable, of } from 'rxjs';

const getCustomerData = {
  "cnt": 5,
  "list": [
    {
      "coord": {
        "lon": -0.1257,
        "lat": 51.5085
      },
      "sys": {
        "country": "GB",
        "timezone": 3600,
        "sunrise": 1623728567,
        "sunset": 1623788360
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "main": {
        "temp": 21.5,
        "feels_like": 21.17,
        "temp_min": 20,
        "temp_max": 22.78,
        "pressure": 1022,
        "humidity": 56
      },
      "visibility": 10000,
      "wind": {
        "speed": 3.09,
        "deg": 100
      },
      "clouds": {
        "all": 20
      },
      "dt": 1623751768,
      "id": 2643743,
      "name": "London"
    },
    {
      "coord": {
        "lon": 7.4167,
        "lat": 43.7333
      },
      "sys": {
        "country": "MC",
        "timezone": 7200,
        "sunrise": 1623728877,
        "sunset": 1623784429
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "main": {
        "temp": 26.77,
        "feels_like": 29.08,
        "temp_min": 25,
        "temp_max": 29.44,
        "pressure": 1018,
        "humidity": 78
      },
      "visibility": 10000,
      "wind": {
        "speed": 2.06,
        "deg": 110
      },
      "clouds": {
        "all": 20
      },
      "dt": 1623751772,
      "id": 2993458,
      "name": "Monaco"
    },
    {
      "coord": {
        "lon": 2.3524,
        "lat": 48.8565
      },
      "sys": {
        "country": "FR",
        "timezone": 7200,
        "sunrise": 1623728792,
        "sunset": 1623786945
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "main": {
        "temp": 26.05,
        "feels_like": 26.05,
        "temp_min": 24.44,
        "temp_max": 28.89,
        "pressure": 1020,
        "humidity": 53
      },
      "visibility": 10000,
      "wind": {
        "speed": 2.06,
        "deg": 340
      },
      "clouds": {
        "all": 0
      },
      "dt": 1623752045,
      "id": 6455259,
      "name": "Paris"
    },
    {
      "coord": {
        "lon": -80.6148,
        "lat": 41.0242
      },
      "sys": {
        "country": "US",
        "timezone": -14400,
        "sunrise": 1623750583,
        "sunset": 1623804984
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "main": {
        "temp": 12.72,
        "feels_like": 12.66,
        "temp_min": 12,
        "temp_max": 13.89,
        "pressure": 1013,
        "humidity": 100
      },
      "visibility": 10000,
      "wind": {
        "speed": 1.54,
        "deg": 240
      },
      "clouds": {
        "all": 1
      },
      "dt": 1623751997,
      "id": 5167196,
      "name": "Poland"
    },
    {
      "coord": {
        "lon": -52.848,
        "lat": 47.6332
      },
      "sys": {
        "country": "CA",
        "timezone": -9000,
        "sunrise": 1623742380,
        "sunset": 1623799857
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "main": {
        "temp": 7.57,
        "feels_like": 5.23,
        "temp_min": 5.56,
        "temp_max": 9.44,
        "pressure": 1026,
        "humidity": 81
      },
      "visibility": 10000,
      "wind": {
        "speed": 3.6,
        "deg": 220
      },
      "clouds": {
        "all": 90
      },
      "dt": 1623752012,
      "id": 6112032,
      "name": "Portugal Cove"
    }
  ]
}

class ApiServiceStub {
  constructor() { }

  getCustomerByMultipleCityId(queryParams): Observable<any> {
    return of(getCustomerData);
  }
}

class CustomerServiceStub {
  constructor() { }
  setCustomerData(data: any) {
  }
  getCustomerData(queryParams): Observable<any> {
    return of(getCustomerData);
  }
}

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerComponent],
      imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule],
      providers: [{ provide: CustomerService, useClass: CustomerServiceStub },
      { provide: ApiService, useClass: ApiServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate to city', () => {
    const navigatespy = spyOn(router, 'navigate');
    component.navigateToCity('london');
    expect(navigatespy).toHaveBeenCalledWith(['/city/london']);
  });
});

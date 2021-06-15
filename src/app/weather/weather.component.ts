import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Router } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cityList = [
    {
      cityName: 'London',
      cityId: 2643743
    },
    {
      cityName: 'Monaco',
      cityId: 2993458
    },
    {
      cityName: 'Paris',
      cityId: 6455259
    },
    {
      cityName: 'Poland',
      cityId: 5167196
    },
    {
      cityName: 'Portugal',
      cityId: 6112032
    },
  ];
  public weatherData = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getWeatherByMultipleCityId();
  }

  getWeatherByMultipleCityId() {
    const getWeatherData = this.weatherService.getWeatherData();
    const getCityId = this.cityList.map(val => val.cityId);
    const multiplCityId = getCityId.join(',');
    const queryParams = multiplCityId;
    if (getWeatherData) {
      this.weatherData = getWeatherData;
    } else {
      this.apiService.getWeatherByMultipleCityId(queryParams).subscribe(data => {
        this.weatherData = data['list'];
        this.weatherService.setWeatherData(this.weatherData);
      });
    }
  }

  navigateToCity(cityName) {
    const city = cityName.trim().toLocaleLowerCase();
    this.router.navigate(['/city/' + city]);
  }

  timeConverter(UNIX_timestamp) {
    //multiply by 1000 to convert into milliseconds
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }




}

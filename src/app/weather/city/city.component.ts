import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "../../api.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  city: string;
  cityData = [];
  failedToLoad: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    let getUpdatedDate = this.addDaysToCurrentDate(5, 9, 0, 0);
    this.route.paramMap.subscribe(route => {
      const cityName = route.get('city');
      this.apiService.getWeatherByCityName(cityName).subscribe(data => {
        this.city = data['city'].name;
        const filteredData = data['list'].filter((val) => {
          let dateList = new Date(val.dt_txt);
          return getUpdatedDate > dateList;
        })
        this.cityData = filteredData;
      },
        error => {
          this.failedToLoad = true;
        });
    });
  }

  addDaysToCurrentDate(daysToAdd, setHours, min, sec) {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    currentDate.setHours(setHours);
    currentDate.setMinutes(min);
    currentDate.setMilliseconds(sec);
    return currentDate;
  }


}

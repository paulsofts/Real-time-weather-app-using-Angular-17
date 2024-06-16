import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './weather.service';
declare var $: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';

  /**
   * Below fields are used in app.component.html for interpolation
   * @author paulsofts
   */

  todayDate: Date;
  temp: any;
  location: any;
  precipitation: any;
  humidity: any;
  wind: any;
  condition: any;

  constructor(private weatherService: WeatherService){
    this.todayDate = new Date();
  }

  changeLocation(){
    this.getWeatherDataByCity();
  }

  getWeatherDataByCity(){
    /**
     * 1. jQuery is being used to select the HTML element with id as 'cityName'.
     * 2. Using weatherService we are fetching data and then subscribe it to listen the data.
     * @author paulsofts
     */
    var city = $('#cityName').val();
    this.weatherService.getWeatherDataByCity(city).subscribe(data => {
      console.log(data);
      this.temp = data.current.temp_c;
      this.location = data.location.name;
      this.humidity = data.current.humidity;
      this.wind = data.current.wind_kph;
      this.precipitation = data.current.precip_in;
      this.condition = data.current.condition.text;
    }, error => console.log(error));
  }
}

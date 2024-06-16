import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /**
   * Injecting HttpClient in service with the help of constructor
   * 
   * @param _httpClient 
   * @author paulsofts
   */

  constructor(private _httpClient: HttpClient) {

   }

   /**
    * 
    * @param city 
    * @returns data returned from the API
    * @author paulsofts
    */
   getWeatherDataByCity(city: string): Observable<any>{
    var _httpHeader = {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': '3441e3d09dmsh65aa5232e72a575p1bfd80jsnbb2bcb5d4acd'
    }
    var q = city;
    var url = 'https://weatherapi-com.p.rapidapi.com/current.json';
    return this._httpClient.get(url, {params:{q}, headers: _httpHeader});
   }
}

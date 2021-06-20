import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Names} from './domain/Names';
import {Observable} from 'rxjs';
import {CountryData} from './domain/CountryData';
import {CovidData} from "./domain/CovidData";


const BASE_URL = 'https://restcountries.eu/rest/v2';
const COVID_URL = 'https://api.covid19api.com/live/country/pl';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {


  constructor(private httpClient: HttpClient ) { }

  capitalFind(capital: string): Observable<CountryData[]> {
           return this.httpClient.get<CountryData[]>(`${BASE_URL}/capital/${capital}`);
  }

  countryFind(capital: string): Observable<CountryData[]> {
    return this.httpClient.get<CountryData[]>(`${BASE_URL}/name/${capital}`);
  }

  currencyFind(capital: string): Observable<CountryData[]> {
    return this.httpClient.get<CountryData[]>(`${BASE_URL}/currency/${capital}`);
  }

  langFind(capital: string): Observable<CountryData[]> {
    return this.httpClient.get<CountryData[]>(`${BASE_URL}/lang/${capital}`);
  }

 /* borderFind(col: string): Observable<CountryData[]> {
    return this.httpClient.get<CountryData[]>(`${BASE_URL}/alpha/${col}`);
  }*/
  covidFind(capital: string): Observable<CovidData[]> {
    return this.httpClient.get<CovidData[]>(`${COVID_URL}/lang/${capital}`);
  }


}

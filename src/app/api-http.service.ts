import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Names} from './domain/Names';
import {Observable} from 'rxjs';
import {CountryData} from './domain/CountryData';


const BASE_URL = 'https://restcountries.eu/rest/v2';
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
}

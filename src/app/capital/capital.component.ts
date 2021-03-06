import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service' ;
import {Names} from '../domain/Names';
import {Router} from '@angular/router';
import {CountryData} from '../domain/CountryData';
import {Currency} from '../domain/Currency';
import {Language} from '../domain/Language';
import {TopLevelDomain} from '../domain/TopLevelDomain';
import {CovidData} from '../domain/CovidData';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {

  capitalName: string;
  border: string;
  datas: CountryData[] = [];
  r: CountryData;
  currencies: Currency[] = [];
  c: Currency;
  languages: Language[] = [];
  l: Language;
  topLevelDomain: TopLevelDomain[] = [];
  d: TopLevelDomain;
  borders: string[];

  covids: CovidData[] = [];
  cd: CovidData;

  constructor(private apiHttp: ApiHttpService, private router: Router) { }


  ngOnInit(): void {

  }

  capitalFinder(): void {
    this.apiHttp.capitalFind(this.capitalName).subscribe(
      r => this.datas = r,
        );
  }


/*  borderFinder(border: string): void {
    this.apiHttp.borderFind(this.border).subscribe(
      r => this.datas = r,
    );
  }*/
 /* covidFinder(): void {
    this.apiHttp.covidFind(this.capitalName).subscribe(
      cd => this.covids = cd,
    );
  }*/

}

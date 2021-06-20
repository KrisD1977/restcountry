import { Component, OnInit } from '@angular/core';
import {CountryData} from "../domain/CountryData";
import {Currency} from "../domain/Currency";
import {Language} from "../domain/Language";
import {TopLevelDomain} from "../domain/TopLevelDomain";
import {ApiHttpService} from "../api-http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  capitalName: string;
  datas: CountryData[] = [];
  r: CountryData;
  currencies: Currency[] = [];
  c: Currency;
  languages: Language[] = [];
  l: Language;
  topLevelDomain: TopLevelDomain[] = [];
  d: TopLevelDomain;

  constructor(private apiHttp: ApiHttpService, private router: Router) { }

  ngOnInit(): void {

  }

  capitalFinder(): void {

    this.apiHttp.currencyFind(this.capitalName).subscribe(
      r => this.datas = r,
    );

  }


}

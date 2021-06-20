import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Router} from '@angular/router';
import {CountryData} from '../domain/CountryData';
import {Currency} from "../domain/Currency";
import {Language} from "../domain/Language";
import {TopLevelDomain} from "../domain/TopLevelDomain";


@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
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

    this.apiHttp.countryFind(this.capitalName).subscribe(
      r => this.datas = r,
    );


    /*, this.router.navigate(['/results'])*/
  }

}

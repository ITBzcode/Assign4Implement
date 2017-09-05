import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { BaseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { Scoresheet } from '../shared/scoresheet';

@Injectable()
export class ScoresheetService {

  constructor(
    private http: Http,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private restangular: Restangular
  ) { }

  getScoresheets(): Observable<Scoresheet[]> {
    return this.restangular.all('scoresheets').getList();
  }

  getScoresheet(id: number): Observable<Scoresheet> {
    return this.restangular.one('scoresheets',id).get();
  }

  getUsersheet(user: string): Observable<Scoresheet> {
    return this.restangular.all('scoresheets').getList({username:user})
      .map(scoresheet => scoresheet[0]);
  }

  postNewScoresheet(sheet: Scoresheet) {
    return this.restangular.all('scoresheets').post(sheet);
  }

}

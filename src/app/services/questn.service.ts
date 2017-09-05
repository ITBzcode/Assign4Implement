import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { Questn } from '../shared/questn';
import { QUESTNS } from '../shared/questns';

@Injectable()
export class QuestnService {

  constructor() { }

  getQuestns(): Observable<Questn[]> {
    return Observable.of(QUESTNS);
  }

  getQuestn(id: number): Observable<Questn> {
    return Observable.of(QUESTNS.filter((aQ) => (aQ.id === id))[0]);
  }

  getThemedQuestns(themeId: number): Observable<Questn[]> {
    return Observable.of(QUESTNS.filter((aQ) => (aQ.theme === themeId)));
  }

}

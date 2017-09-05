import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';


import { Dimen } from '../shared/dimen';
import { DIMENS } from '../shared/dimens';

@Injectable()
export class DimenService {

  constructor() { }

  getDimens(): Observable<Dimen[]> {
    return Observable.of(DIMENS);
  }

  getDimen(id: number): Observable<Dimen> {
    return Observable.of(DIMENS.filter((dimen) => (dimen.id === id))[0]);
  }

  getrelevantDimens(themeId: number): Observable<Dimen[]> {
    return Observable.of(DIMENS.filter((adimen) => (adimen.theme === themeId)));
  }

  getDimenTitles(): Observable<string[]> {
    return Observable.of(DIMENS.map(dimen => dimen.title));
  }
}

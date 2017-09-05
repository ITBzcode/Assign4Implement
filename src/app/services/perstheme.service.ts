import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { Perstheme } from '../shared/perstheme';
import { PERSTHEMES } from '../shared/persthemes';

@Injectable()
export class PersthemeService {

  constructor() { }

  getPersthemes(): Observable<Perstheme[]> {
    return Observable.of(PERSTHEMES);
  }

  getPerstheme(id: number): Observable<Perstheme> {
    return Observable.of(PERSTHEMES.filter((atheme) => (atheme.id === id))[0]);
  }

}

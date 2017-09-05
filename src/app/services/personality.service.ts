import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { Personality } from '../shared/personality';
import { PERSONALITIES } from '../shared/personalities';


@Injectable()
export class PersonalityService {

  constructor() { }

   getPersonalities(): Observable<Personality[]> {
    return Observable.of(PERSONALITIES);
  }

  getPersonality(id: number): Observable<Personality> {
    return Observable.of(PERSONALITIES.filter((ptype) => (ptype.id === id))[0]);
  }

  getNamedPersonality(name: string): Observable<Personality> {
    return Observable.of(PERSONALITIES.filter((ptype) => (ptype.name === name))[0]);
  }

}

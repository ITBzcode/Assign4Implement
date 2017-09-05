import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

import { Personality } from '../shared/personality';
import { PersonalityService } from '../services/personality.service';
import { Dimen } from '../shared/dimen';
import { DimenService } from '../services/dimen.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  
  ptype: Personality;
  dimens: Dimen[];
  dimen: Dimen;

  constructor(
    @Inject(MD_DIALOG_DATA) public perstypeId: number,
    private personalityservice: PersonalityService,
    private dimenservice: DimenService
  ) { }

  ngOnInit() {
    this.personalityservice.getPersonality(this.perstypeId)
      .subscribe(ptype => this.ptype = ptype);
    this.dimenservice.getDimens()
      .subscribe(dimens => this.dimens = dimens);
    
  }

  getdimenfromId(dimId): Dimen {
    this.dimenservice.getDimen(dimId)
      .subscribe(dimen => this.dimen = dimen);
    return this.dimen;
  }

}

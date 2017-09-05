import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';

import { PersonComponent } from '../person/person.component';

import { Personality } from '../shared/personality';
import { PersonalityService } from '../services/personality.service';
import { Dimen } from '../shared/dimen';
import { DimenService } from '../services/dimen.service';
import { Scoresheet } from '../shared/scoresheet';
import { ScoresheetService } from '../services/scoresheet.service';
import { Perstheme } from '../shared/perstheme';
import { PersthemeService } from '../services/perstheme.service';
import { ToolbarCol, AccentSet } from '../shared/toolbar';
import { Questn } from '../shared/questn';
import { QuestnService } from '../services/questn.service';

import { flyInOut } from '../animations/app.animation';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut()
    ]
})
export class ReviewComponent implements OnInit {

  scoresheetForm: FormGroup;
  scoresheet: Scoresheet;
  username: string;
  recalcNeeded: boolean;
  setThemeNeeded: boolean;

  ptype: Personality;
  yourtype: Personality;
  updatedtype: Personality;
  dimentitles: string[];
  dimens: Dimen[];
  themedQuestns: Questn[];
  persthemes: Perstheme[];
  perstheme: Perstheme;
  toolbars = ToolbarCol;
  accentset = AccentSet;
  qTheme: number;
  ptypedimens: number[] = [0,0,0,0];
  ytypedimens: number[] = [0,0,0,0];


  qformname: string[] = ['q00','q01','q02','q03','q04','q05','q06','q07','q08','q09',
  'q10','q11','q12','q13','q14','q15','q16','q17','q18','q19',
  'q20','q21','q22','q23','q24','q25','q26','q27','q28','q29',
  'q30','q31','q32','q33','q34','q35','q36','q37','q38','q39',
  'q40','q41','q42','q43','q44','q45','q46','q47','q48','q49',
  'q50','q51','q52','q53','q54','q55','q56','q57','q58','q59',
  'q60','q61','q62','q63','q64','q65','q66','q67','q68','q69'];

  constructor(
    private route: ActivatedRoute,
    private personalityservice: PersonalityService,
    private dimenservice: DimenService,
    private persthemeservice: PersthemeService,
    private scshservice: ScoresheetService,
    private questionservice: QuestnService,
    @Inject('BaseURL') private BaseURL,
    private fb: FormBuilder,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log("personality target: ", id);
    // retrieve this person's target personality
    this.personalityservice.getPersonality(id)
      .subscribe(ptype => this.ptype = ptype);
    this.username = 'UserPers';

    this.setPtypeDimens();
    this.createForm();
    this.recalcNeeded = true;
    this.setThemeNeeded = true;
    this.qTheme = 3; // default value that always cause problems ...

    this.dimenservice.getDimenTitles()
      .subscribe(dimentitles => this.dimentitles = dimentitles);

    this.dimenservice.getDimens()
      .subscribe(dimens => this.dimens = dimens);

    this.persthemeservice.getPersthemes()
      .subscribe(persthemes => this.persthemes = persthemes);

    this.questionservice.getThemedQuestns(this.qTheme)
      .subscribe(themedQuestns => this.themedQuestns = themedQuestns);

      let qId = +this.route.snapshot.params['qId'];
      console.log("the questions: ", qId);
      // retrieve this person's questions
    this.scshservice.getScoresheet(qId)
      .subscribe(scoresheet => {this.scoresheet = scoresheet;
        this.setInputFormValues(this.scoresheet);
        ;}
        //console.log("the users scoresheet: ", this.scoresheet);}
      );

  }

  switcherforAccent(qDim): Object {
    switch(qDim) {
      case this.ptype.dimFAVW:
      case this.ptype.dimDECI:
      case this.ptype.dimINFO:
      case this.ptype.dimSTRC:
        return this.accentset[1];
      default:
        return this.accentset[0];
    }
  }

  getAccentforA(qId): Object {
    return this.switcherforAccent(this.themedQuestns[qId].aDim);
  }

  getAccentforB(qId): Object {
    return this.switcherforAccent(this.themedQuestns[qId].bDim);
  }

  setTheme(tId): void {
    // set the theme for the subset of questions
    this.qTheme = tId;
    this.questionservice.getThemedQuestns(this.qTheme)
    .subscribe(themedQuestns => this.themedQuestns = themedQuestns);
    this.setThemeNeeded = false;
    this.calculatePtype(this.scoresheetForm.value);
  }

  setPtypeDimens() {
    this.ptypedimens[0] = this.ptype.dimFAVW;
    this.ptypedimens[1] = this.ptype.dimINFO;
    this.ptypedimens[2] = this.ptype.dimDECI;
    this.ptypedimens[3] = this.ptype.dimSTRC;
  }

  setYtypeDimens() {
    this.ytypedimens[0] = this.yourtype.dimFAVW;
    this.ytypedimens[1] = this.yourtype.dimINFO;
    this.ytypedimens[2] = this.yourtype.dimDECI;
    this.ytypedimens[3] = this.yourtype.dimSTRC;
  }

  // will return this first dimension if yourtype doesn't yet exist
  getThemeYDimen(aTheme: number): string {
    if(this.yourtype) {
      return this.dimens[this.ytypedimens[aTheme]].title;
    } else {
      return this.dimens[0].title; // basically ... a punt
    }
  }

  // will return the index of the first dimension if yourtype doesn't yet exist
  getThemeYIndex(aTheme: number): number {
    if(this.yourtype) {
      return this.ytypedimens[aTheme];
    } else {
      return 0; // basically ... a punt
    }
  }

  openPerson(perstypeId) {
    this.dialog.open(PersonComponent, {
      width: '1050px', 
      height: '550px',
      data: perstypeId
    });
  }

  calculatePtype(aSheet: Scoresheet) {
    var p1 = 0; // favorite world dimension
    var p2 = 0; // Information intake
    var p3 = 0; // Decision Making
    var p4 = 0; // Life Structure
    //console.log("sheet I got", aSheet);
    p1 += (aSheet.q00 === 'a') ? 1 : -1;
    p2 += ((aSheet.q01 === 'a') ? 1 : -1) + ((aSheet.q02 === 'a') ? 1 : -1);
    p3 += ((aSheet.q03 === 'a') ? 1 : -1) + ((aSheet.q04 === 'a') ? 1 : -1);
    p4 += ((aSheet.q05 === 'a') ? 1 : -1) + ((aSheet.q06 === 'a') ? 1 : -1);
    p1 += (aSheet.q07 === 'a') ? 1 : -1;
    p2 += ((aSheet.q08 === 'a') ? 1 : -1) + ((aSheet.q09 === 'a') ? 1 : -1);
    p3 += ((aSheet.q10 === 'a') ? 1 : -1) + ((aSheet.q11 === 'a') ? 1 : -1);
    p4 += ((aSheet.q12 === 'a') ? 1 : -1) + ((aSheet.q13 === 'a') ? 1 : -1);
    p1 += (aSheet.q14 === 'a') ? 1 : -1;
    p2 += ((aSheet.q15 === 'a') ? 1 : -1) + ((aSheet.q16 === 'a') ? 1 : -1);
    p3 += ((aSheet.q17 === 'a') ? 1 : -1) + ((aSheet.q18 === 'a') ? 1 : -1);
    p4 += ((aSheet.q19 === 'a') ? 1 : -1) + ((aSheet.q20 === 'a') ? 1 : -1);
    p1 += (aSheet.q21 === 'a') ? 1 : -1;
    p2 += ((aSheet.q22 === 'a') ? 1 : -1) + ((aSheet.q23 === 'a') ? 1 : -1);
    p3 += ((aSheet.q24 === 'a') ? 1 : -1) + ((aSheet.q25 === 'a') ? 1 : -1);
    p4 += ((aSheet.q26 === 'a') ? 1 : -1) + ((aSheet.q27 === 'a') ? 1 : -1);
    p1 += (aSheet.q28 === 'a') ? 1 : -1;
    p2 += ((aSheet.q29 === 'a') ? 1 : -1) + ((aSheet.q30 === 'a') ? 1 : -1);
    p3 += ((aSheet.q31 === 'a') ? 1 : -1) + ((aSheet.q32 === 'a') ? 1 : -1);
    p4 += ((aSheet.q33 === 'a') ? 1 : -1) + ((aSheet.q34 === 'a') ? 1 : -1);
    p1 += (aSheet.q35 === 'a') ? 1 : -1;
    p2 += ((aSheet.q36 === 'a') ? 1 : -1) + ((aSheet.q37 === 'a') ? 1 : -1);
    p3 += ((aSheet.q38 === 'a') ? 1 : -1) + ((aSheet.q39 === 'a') ? 1 : -1);
    p4 += ((aSheet.q40 === 'a') ? 1 : -1) + ((aSheet.q41 === 'a') ? 1 : -1);
    p1 += (aSheet.q42 === 'a') ? 1 : -1;
    p2 += ((aSheet.q43 === 'a') ? 1 : -1) + ((aSheet.q44 === 'a') ? 1 : -1);
    p3 += ((aSheet.q45 === 'a') ? 1 : -1) + ((aSheet.q46 === 'a') ? 1 : -1);
    p4 += ((aSheet.q47 === 'a') ? 1 : -1) + ((aSheet.q48 === 'a') ? 1 : -1);
    p1 += (aSheet.q49 === 'a') ? 1 : -1;
    p2 += ((aSheet.q50 === 'a') ? 1 : -1) + ((aSheet.q51 === 'a') ? 1 : -1);
    p3 += ((aSheet.q52 === 'a') ? 1 : -1) + ((aSheet.q53 === 'a') ? 1 : -1);
    p4 += ((aSheet.q54 === 'a') ? 1 : -1) + ((aSheet.q55 === 'a') ? 1 : -1);
    p1 += (aSheet.q56 === 'a') ? 1 : -1;
    p2 += ((aSheet.q57 === 'a') ? 1 : -1) + ((aSheet.q58 === 'a') ? 1 : -1);
    p3 += ((aSheet.q59 === 'a') ? 1 : -1) + ((aSheet.q60 === 'a') ? 1 : -1);
    p4 += ((aSheet.q61 === 'a') ? 1 : -1) + ((aSheet.q62 === 'a') ? 1 : -1);
    p1 += (aSheet.q63 === 'a') ? 1 : -1;
    p2 += ((aSheet.q64 === 'a') ? 1 : -1) + ((aSheet.q65 === 'a') ? 1 : -1);
    p3 += ((aSheet.q66 === 'a') ? 1 : -1) + ((aSheet.q67 === 'a') ? 1 : -1);
    p4 += ((aSheet.q68 === 'a') ? 1 : -1) + ((aSheet.q69 === 'a') ? 1 : -1);
    //console.log("after last round: ", p1, p2, p3, p4);

    var persname = '';
    if(p1>0){ persname="E"; } else { persname="I"; }
    if(p2>0){ persname += "S"; } else { persname += "N"; }
    if(p3>0){ persname += "T"; } else { persname += "F"; }
    if(p4>0){ persname += "J"; } else { persname += "P"; }
    //console.log("the calculated type", persname);

    this.personalityservice.getNamedPersonality(persname)
      .subscribe(yourtype => this.yourtype = yourtype);
    this.setYtypeDimens();

    this.recalcNeeded = false;
  }

  resetRecalc(qform:string, ans:string) {
    this.recalcNeeded = true;
    //console.log("qform passed: ", qform, ans);
    this.scoresheetForm.get(qform).setValue(ans);
    this.calculatePtype(this.scoresheetForm.value);
  }

  createForm(): void {
    this.scoresheetForm = this.fb.group({
      id: 0,
      username: '',
      q00: '', q01: '', q02: '', q03: '', q04: '',
      q05: '', q06: '', q07: '', q08: '', q09: '',
      q10: '', q11: '', q12: '', q13: '', q14: '',
      q15: '', q16: '', q17: '', q18: '', q19: '',
      q20: '', q21: '', q22: '', q23: '', q24: '',
      q25: '', q26: '', q27: '', q28: '', q29: '',
      q30: '', q31: '', q32: '', q33: '', q34: '',
      q35: '', q36: '', q37: '', q38: '', q39: '',
      q40: '', q41: '', q42: '', q43: '', q44: '',
      q45: '', q46: '', q47: '', q48: '', q49: '',
      q50: '', q51: '', q52: '', q53: '', q54: '',
      q55: '', q56: '', q57: '', q58: '', q59: '',
      q60: '', q61: '', q62: '', q63: '', q64: '',
      q65: '', q66: '', q67: '', q68: '', q69: ''
    })
  }

  setInputFormValues(aSheet: Scoresheet) {
    this.scoresheetForm.get('id').setValue(aSheet.id);
    this.scoresheetForm.get('username').setValue(aSheet.username);
    this.scoresheetForm.get('q00').setValue(aSheet.q00); 
    this.scoresheetForm.get('q01').setValue(aSheet.q01);
    this.scoresheetForm.get('q02').setValue(aSheet.q02);
    this.scoresheetForm.get('q03').setValue(aSheet.q03);
    this.scoresheetForm.get('q04').setValue(aSheet.q04);
    this.scoresheetForm.get('q05').setValue(aSheet.q05);
    this.scoresheetForm.get('q06').setValue(aSheet.q06);
    this.scoresheetForm.get('q07').setValue(aSheet.q07);
    this.scoresheetForm.get('q08').setValue(aSheet.q08);
    this.scoresheetForm.get('q09').setValue(aSheet.q09);
    this.scoresheetForm.get('q10').setValue(aSheet.q10);
    this.scoresheetForm.get('q11').setValue(aSheet.q11);
    this.scoresheetForm.get('q12').setValue(aSheet.q12);
    this.scoresheetForm.get('q13').setValue(aSheet.q13);
    this.scoresheetForm.get('q14').setValue(aSheet.q14);
    this.scoresheetForm.get('q15').setValue(aSheet.q15);
    this.scoresheetForm.get('q16').setValue(aSheet.q16);
    this.scoresheetForm.get('q17').setValue(aSheet.q17);
    this.scoresheetForm.get('q18').setValue(aSheet.q18);
    this.scoresheetForm.get('q19').setValue(aSheet.q19);
    this.scoresheetForm.get('q20').setValue(aSheet.q20);
    this.scoresheetForm.get('q21').setValue(aSheet.q21);
    this.scoresheetForm.get('q22').setValue(aSheet.q22);
    this.scoresheetForm.get('q23').setValue(aSheet.q23);
    this.scoresheetForm.get('q24').setValue(aSheet.q24);
    this.scoresheetForm.get('q25').setValue(aSheet.q25);
    this.scoresheetForm.get('q26').setValue(aSheet.q26);
    this.scoresheetForm.get('q27').setValue(aSheet.q27);
    this.scoresheetForm.get('q28').setValue(aSheet.q28);
    this.scoresheetForm.get('q29').setValue(aSheet.q29);
    this.scoresheetForm.get('q30').setValue(aSheet.q30);
    this.scoresheetForm.get('q31').setValue(aSheet.q31);
    this.scoresheetForm.get('q32').setValue(aSheet.q32);
    this.scoresheetForm.get('q33').setValue(aSheet.q33);
    this.scoresheetForm.get('q34').setValue(aSheet.q34);
    this.scoresheetForm.get('q35').setValue(aSheet.q35);
    this.scoresheetForm.get('q36').setValue(aSheet.q36);
    this.scoresheetForm.get('q37').setValue(aSheet.q37);
    this.scoresheetForm.get('q38').setValue(aSheet.q38);
    this.scoresheetForm.get('q39').setValue(aSheet.q39);
    this.scoresheetForm.get('q40').setValue(aSheet.q40);
    this.scoresheetForm.get('q41').setValue(aSheet.q41);
    this.scoresheetForm.get('q42').setValue(aSheet.q42);
    this.scoresheetForm.get('q43').setValue(aSheet.q43);
    this.scoresheetForm.get('q44').setValue(aSheet.q44);
    this.scoresheetForm.get('q45').setValue(aSheet.q45);
    this.scoresheetForm.get('q46').setValue(aSheet.q46);
    this.scoresheetForm.get('q47').setValue(aSheet.q47);
    this.scoresheetForm.get('q48').setValue(aSheet.q48);
    this.scoresheetForm.get('q49').setValue(aSheet.q49);
    this.scoresheetForm.get('q50').setValue(aSheet.q50);
    this.scoresheetForm.get('q51').setValue(aSheet.q51);
    this.scoresheetForm.get('q52').setValue(aSheet.q52);
    this.scoresheetForm.get('q53').setValue(aSheet.q53);
    this.scoresheetForm.get('q54').setValue(aSheet.q54);
    this.scoresheetForm.get('q55').setValue(aSheet.q55);
    this.scoresheetForm.get('q56').setValue(aSheet.q56);
    this.scoresheetForm.get('q57').setValue(aSheet.q57);
    this.scoresheetForm.get('q58').setValue(aSheet.q58);
    this.scoresheetForm.get('q59').setValue(aSheet.q59);
    this.scoresheetForm.get('q60').setValue(aSheet.q60);
    this.scoresheetForm.get('q61').setValue(aSheet.q61);
    this.scoresheetForm.get('q62').setValue(aSheet.q62);
    this.scoresheetForm.get('q63').setValue(aSheet.q63);
    this.scoresheetForm.get('q64').setValue(aSheet.q64);
    this.scoresheetForm.get('q65').setValue(aSheet.q65);
    this.scoresheetForm.get('q66').setValue(aSheet.q66);
    this.scoresheetForm.get('q67').setValue(aSheet.q67);
    this.scoresheetForm.get('q68').setValue(aSheet.q68);
    this.scoresheetForm.get('q69').setValue(aSheet.q69);
    //console.log("the scoresheetForm: ", this.scoresheetForm.value);
  }


}

import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Response } from '@angular/http';

import { SpectrumComponent } from '../spectrum/spectrum.component';

import { Personality } from '../shared/personality';
import { PersonalityService } from '../services/personality.service';
import { Dimen } from '../shared/dimen';
import { DimenService } from '../services/dimen.service';
import { Perstheme } from '../shared/perstheme';
import { PersthemeService } from '../services/perstheme.service';
import { Questn } from '../shared/questn';
import { QuestnService } from '../services/questn.service';
import { ToolbarCol, AccentSet, BtnProgress } from '../shared/toolbar';
import { Scoresheet } from '../shared/scoresheet';
import { ScoresheetService } from '../services/scoresheet.service';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';

import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut()
    ]
})
export class QuestionsComponent implements OnInit {

  feedbackForm: FormGroup;
  scoresheetCopy: Scoresheet;
  scoresheetOld = null; // resavable
  retScoresheet: Scoresheet;
  username: string;
  scorenum: number;

  errMess: string;
  hintsOn: boolean;

  ptype: Personality;
  persthemes: Perstheme[];
  perstheme: Perstheme;
  allDims: Dimen[];
  dimen: Dimen;
  allQuestns: Questn[];
  qGroup: number;
  btnstatus: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  i: number;
  toolbars = ToolbarCol;
  accentset = AccentSet;
  btnprogress = BtnProgress;

  qformname: string[] = ['q00','q01','q02','q03','q04','q05','q06','q07','q08','q09',
                        'q10','q11','q12','q13','q14','q15','q16','q17','q18','q19',
                        'q20','q21','q22','q23','q24','q25','q26','q27','q28','q29',
                        'q30','q31','q32','q33','q34','q35','q36','q37','q38','q39',
                        'q40','q41','q42','q43','q44','q45','q46','q47','q48','q49',
                        'q50','q51','q52','q53','q54','q55','q56','q57','q58','q59',
                        'q60','q61','q62','q63','q64','q65','q66','q67','q68','q69'];

  constructor(
    private personalityservice: PersonalityService,
    private dimenservice: DimenService,
    private persthemeservice: PersthemeService,
    private questionservice: QuestnService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private dialog: MdDialog,
    private scshservice: ScoresheetService,
    private processmsgserv: ProcessHTTPMsgService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.personalityservice.getPersonality(id)
      .subscribe(ptype => this.ptype = ptype);
    this.username = 'UserPers';
    this.scorenum = this.randomIntFromInterval(1000,1000000);

    // create the input form
    this.createForm();

    // get default scoresheet into scoresheetCopy0, type Scoresheet
    this.scshservice.getScoresheet(0)
      .subscribe(scoresheet => {this.scoresheetCopy = scoresheet;
        console.log("default sheet", this.scoresheetCopy);}
      );

    // get a specific users scoresheetCopy1, a null
    this.scshservice.getUsersheet(this.username)
      .subscribe(scoresheet => {this.scoresheetOld = scoresheet; 
        console.log("resavable user sheet", this.scoresheetOld)}
      );

    this.questionservice.getQuestns()
      .subscribe(allQuestns => this.allQuestns = allQuestns);
    this.persthemeservice.getPersthemes()
      .subscribe(persthemes => this.persthemes = persthemes);
    this.dimenservice.getDimens()
      .subscribe(alldims => this.allDims = alldims);

    this.qGroup = 0; // start with first group of questions
    this.hintsOn = false; // start with hints off
  }

  randomIntFromInterval(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  
  goBack(): void {
    this.location.back();
  }

  getdimenfromId(dimId): Dimen {
    this.dimenservice.getDimen(dimId)
      .subscribe(dimen => this.dimen = dimen);
    return this.dimen;
  }
  
  getpersthemeTitlefromId(persId): string {
    this.persthemeservice.getPerstheme(persId)
      .subscribe(perstheme => this.perstheme = perstheme);
    return this.perstheme.title
  }

  switcherforAccent(qDim): Object {
    if(this.hintsOn === false){
      return this.accentset[0] // no accents if hints are off
    }
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
    return this.switcherforAccent(this.allQuestns[qId].aDim);
  }

  getAccentforB(qId): Object {
    return this.switcherforAccent(this.allQuestns[qId].bDim);
  }

  openSpectrum(specId) {
    this.dialog.open(SpectrumComponent, {
      width: '800px', 
      height: '520px',
      data: specId
    });
  }

  resetHint() {
    //console.log("Clicked on Hints toggle");
    this.hintsOn = !(this.hintsOn);
  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      id: this.scorenum,
      username: this.username,
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

  onSubmit() {
    //console.log("before the assignment: ", this.scoresheetCopy);
    this.scoresheetCopy.id = this.feedbackForm.get('id').value;
    this.scoresheetCopy.username = this.feedbackForm.get('username').value;
    this.scoresheetCopy.q00 = this.feedbackForm.get('q00').value;
    this.scoresheetCopy.q01 = this.feedbackForm.get('q01').value;
    this.scoresheetCopy.q02 = this.feedbackForm.get('q02').value;
    this.scoresheetCopy.q03 = this.feedbackForm.get('q03').value;
    this.scoresheetCopy.q04 = this.feedbackForm.get('q04').value;
    this.scoresheetCopy.q05 = this.feedbackForm.get('q05').value;
    this.scoresheetCopy.q06 = this.feedbackForm.get('q06').value;
    this.scoresheetCopy.q07 = this.feedbackForm.get('q07').value;
    this.scoresheetCopy.q08 = this.feedbackForm.get('q08').value;
    this.scoresheetCopy.q09 = this.feedbackForm.get('q09').value;
    this.scoresheetCopy.q10 = this.feedbackForm.get('q10').value;
    this.scoresheetCopy.q11 = this.feedbackForm.get('q11').value;
    this.scoresheetCopy.q12 = this.feedbackForm.get('q12').value;
    this.scoresheetCopy.q13 = this.feedbackForm.get('q13').value;
    this.scoresheetCopy.q14 = this.feedbackForm.get('q14').value;
    this.scoresheetCopy.q15 = this.feedbackForm.get('q15').value;
    this.scoresheetCopy.q16 = this.feedbackForm.get('q16').value;
    this.scoresheetCopy.q17 = this.feedbackForm.get('q17').value;
    this.scoresheetCopy.q18 = this.feedbackForm.get('q18').value;
    this.scoresheetCopy.q19 = this.feedbackForm.get('q19').value;
    this.scoresheetCopy.q20 = this.feedbackForm.get('q20').value;
    this.scoresheetCopy.q21 = this.feedbackForm.get('q21').value;
    this.scoresheetCopy.q22 = this.feedbackForm.get('q22').value;
    this.scoresheetCopy.q23 = this.feedbackForm.get('q23').value;
    this.scoresheetCopy.q24 = this.feedbackForm.get('q24').value;
    this.scoresheetCopy.q25 = this.feedbackForm.get('q25').value;
    this.scoresheetCopy.q26 = this.feedbackForm.get('q26').value;
    this.scoresheetCopy.q27 = this.feedbackForm.get('q27').value;
    this.scoresheetCopy.q28 = this.feedbackForm.get('q28').value;
    this.scoresheetCopy.q29 = this.feedbackForm.get('q29').value;
    this.scoresheetCopy.q30 = this.feedbackForm.get('q30').value;
    this.scoresheetCopy.q31 = this.feedbackForm.get('q31').value;
    this.scoresheetCopy.q32 = this.feedbackForm.get('q32').value;
    this.scoresheetCopy.q33 = this.feedbackForm.get('q33').value;
    this.scoresheetCopy.q34 = this.feedbackForm.get('q34').value;
    this.scoresheetCopy.q35 = this.feedbackForm.get('q35').value;
    this.scoresheetCopy.q36 = this.feedbackForm.get('q36').value;
    this.scoresheetCopy.q37 = this.feedbackForm.get('q37').value;
    this.scoresheetCopy.q38 = this.feedbackForm.get('q38').value;
    this.scoresheetCopy.q39 = this.feedbackForm.get('q39').value;
    this.scoresheetCopy.q40 = this.feedbackForm.get('q40').value;
    this.scoresheetCopy.q41 = this.feedbackForm.get('q41').value;
    this.scoresheetCopy.q42 = this.feedbackForm.get('q42').value;
    this.scoresheetCopy.q43 = this.feedbackForm.get('q43').value;
    this.scoresheetCopy.q44 = this.feedbackForm.get('q44').value;
    this.scoresheetCopy.q45 = this.feedbackForm.get('q45').value;
    this.scoresheetCopy.q46 = this.feedbackForm.get('q46').value;
    this.scoresheetCopy.q47 = this.feedbackForm.get('q47').value;
    this.scoresheetCopy.q48 = this.feedbackForm.get('q48').value;
    this.scoresheetCopy.q49 = this.feedbackForm.get('q49').value;
    this.scoresheetCopy.q50 = this.feedbackForm.get('q50').value;
    this.scoresheetCopy.q51 = this.feedbackForm.get('q51').value;
    this.scoresheetCopy.q52 = this.feedbackForm.get('q52').value;
    this.scoresheetCopy.q53 = this.feedbackForm.get('q53').value;
    this.scoresheetCopy.q54 = this.feedbackForm.get('q54').value;
    this.scoresheetCopy.q55 = this.feedbackForm.get('q55').value;
    this.scoresheetCopy.q56 = this.feedbackForm.get('q56').value;
    this.scoresheetCopy.q57 = this.feedbackForm.get('q57').value;
    this.scoresheetCopy.q58 = this.feedbackForm.get('q58').value;
    this.scoresheetCopy.q59 = this.feedbackForm.get('q59').value;
    this.scoresheetCopy.q60 = this.feedbackForm.get('q60').value;
    this.scoresheetCopy.q61 = this.feedbackForm.get('q61').value;
    this.scoresheetCopy.q62 = this.feedbackForm.get('q62').value;
    this.scoresheetCopy.q63 = this.feedbackForm.get('q63').value;
    this.scoresheetCopy.q64 = this.feedbackForm.get('q64').value;
    this.scoresheetCopy.q65 = this.feedbackForm.get('q65').value;
    this.scoresheetCopy.q66 = this.feedbackForm.get('q66').value;
    this.scoresheetCopy.q67 = this.feedbackForm.get('q67').value;
    this.scoresheetCopy.q68 = this.feedbackForm.get('q68').value;
    this.scoresheetCopy.q69 = this.feedbackForm.get('q69').value;
    
    //console.log("after the assignment: ", this.scoresheetCopy);

    // try using the service ...
    this.scshservice.postNewScoresheet(this.scoresheetCopy)
    .subscribe(
      scoresheet => {
        this.retScoresheet = scoresheet; 
        console.log("return sheet", this.retScoresheet);
        let link = ['/review', this.ptype.id, this.scorenum];
        this.router.navigate(link);
      },
      errmess => {
        this.errMess = <any>errmess; 
        console.log("Error saving the scoresheet", this.errMess);
        let sErr = `${errmess.status}`;
        console.log("sErr: ", sErr);
      }
    );

    
  }
  
  setqBlock(qB): void {
    // set this button block to active
    this.qGroup = qB;
  }

  checkButtonInvalidity(): boolean {
    // returns false when all the questions have been answered
    // somewhat like an "invalid" indicator
    var ind = 0;
    while (ind < 15){
      if(this.btnstatus[ind] < 2) {return true;}
      ind++;
    }
    return false;
  }

  setButtonStatus(): void {
    var ans=1; // this test happens BEFORE the feedbackForm is updated
              // but AFTER a radio button is clicked

    switch(this.qGroup) {
      case 0:
        ans = ans + (this.feedbackForm.get('q00').value ? 1 : 0) +
        (this.feedbackForm.get('q01').value ? 1 : 0) +
        (this.feedbackForm.get('q02').value ? 1 : 0) +
        (this.feedbackForm.get('q03').value ? 1 : 0) +
        (this.feedbackForm.get('q04').value ? 1 : 0);
        break;
      case 1:
        ans = ans + (this.feedbackForm.get('q05').value ? 1 : 0) +
        (this.feedbackForm.get('q06').value ? 1 : 0) +
        (this.feedbackForm.get('q07').value ? 1 : 0) +
        (this.feedbackForm.get('q08').value ? 1 : 0) +
        (this.feedbackForm.get('q09').value ? 1 : 0);
        break;
      case 2:
        ans = ans + (this.feedbackForm.get('q10').value ? 1 : 0) +
        (this.feedbackForm.get('q11').value ? 1 : 0) +
        (this.feedbackForm.get('q12').value ? 1 : 0) +
        (this.feedbackForm.get('q13').value ? 1 : 0) +
        (this.feedbackForm.get('q14').value ? 1 : 0);
        break;
      case 3:
        ans = ans + (this.feedbackForm.get('q15').value ? 1 : 0) +
        (this.feedbackForm.get('q16').value ? 1 : 0) +
        (this.feedbackForm.get('q17').value ? 1 : 0) +
        (this.feedbackForm.get('q18').value ? 1 : 0) +
        (this.feedbackForm.get('q19').value ? 1 : 0);
        break;
      case 4:
        ans = ans + (this.feedbackForm.get('q20').value ? 1 : 0) +
        (this.feedbackForm.get('q21').value ? 1 : 0) +
        (this.feedbackForm.get('q22').value ? 1 : 0) +
        (this.feedbackForm.get('q23').value ? 1 : 0) +
        (this.feedbackForm.get('q24').value ? 1 : 0);
        break;
      case 5:
        ans = ans + (this.feedbackForm.get('q25').value ? 1 : 0) +
        (this.feedbackForm.get('q26').value ? 1 : 0) +
        (this.feedbackForm.get('q27').value ? 1 : 0) +
        (this.feedbackForm.get('q28').value ? 1 : 0) +
        (this.feedbackForm.get('q29').value ? 1 : 0);
        break;
      case 6:
        ans = ans + (this.feedbackForm.get('q30').value ? 1 : 0) +
        (this.feedbackForm.get('q31').value ? 1 : 0) +
        (this.feedbackForm.get('q32').value ? 1 : 0) +
        (this.feedbackForm.get('q33').value ? 1 : 0) +
        (this.feedbackForm.get('q34').value ? 1 : 0);
        break;
      case 7:
        ans = ans + (this.feedbackForm.get('q35').value ? 1 : 0) +
        (this.feedbackForm.get('q36').value ? 1 : 0) +
        (this.feedbackForm.get('q37').value ? 1 : 0) +
        (this.feedbackForm.get('q38').value ? 1 : 0) +
        (this.feedbackForm.get('q39').value ? 1 : 0);
        break;
      case 8:
        ans = ans + (this.feedbackForm.get('q40').value ? 1 : 0) +
        (this.feedbackForm.get('q41').value ? 1 : 0) +
        (this.feedbackForm.get('q42').value ? 1 : 0) +
        (this.feedbackForm.get('q43').value ? 1 : 0) +
        (this.feedbackForm.get('q44').value ? 1 : 0);
        break;
      case 9:
        ans = ans + (this.feedbackForm.get('q45').value ? 1 : 0) +
        (this.feedbackForm.get('q46').value ? 1 : 0) +
        (this.feedbackForm.get('q47').value ? 1 : 0) +
        (this.feedbackForm.get('q48').value ? 1 : 0) +
        (this.feedbackForm.get('q49').value ? 1 : 0);
        break;
      case 10:
        ans = ans + (this.feedbackForm.get('q50').value ? 1 : 0) +
        (this.feedbackForm.get('q51').value ? 1 : 0) +
        (this.feedbackForm.get('q52').value ? 1 : 0) +
        (this.feedbackForm.get('q53').value ? 1 : 0) +
        (this.feedbackForm.get('q54').value ? 1 : 0);
        break;
      case 11:
        ans = ans + (this.feedbackForm.get('q55').value ? 1 : 0) +
        (this.feedbackForm.get('q56').value ? 1 : 0) +
        (this.feedbackForm.get('q57').value ? 1 : 0) +
        (this.feedbackForm.get('q58').value ? 1 : 0) +
        (this.feedbackForm.get('q59').value ? 1 : 0);
        break;
      case 12:
        ans = ans + (this.feedbackForm.get('q60').value ? 1 : 0) +
        (this.feedbackForm.get('q61').value ? 1 : 0) +
        (this.feedbackForm.get('q62').value ? 1 : 0) +
        (this.feedbackForm.get('q63').value ? 1 : 0) +
        (this.feedbackForm.get('q64').value ? 1 : 0);
        break;
      case 13:
        ans = ans + (this.feedbackForm.get('q65').value ? 1 : 0) +
        (this.feedbackForm.get('q66').value ? 1 : 0) +
        (this.feedbackForm.get('q67').value ? 1 : 0) +
        (this.feedbackForm.get('q68').value ? 1 : 0) +
        (this.feedbackForm.get('q69').value ? 1 : 0);
        break;
    }
    
    switch(ans) {
      case 0:
        this.btnstatus[this.qGroup] = 0;
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        this.btnstatus[this.qGroup] = 1;
        break;
      case 5:
      case 6:
        this.btnstatus[this.qGroup] = 2;
        break;
      default:
        this.btnstatus[this.qGroup] = 0;
    }
  }

}

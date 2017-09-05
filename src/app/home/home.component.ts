import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { SpectrumComponent } from '../spectrum/spectrum.component';

import { Personality } from '../shared/personality';
import { PersonalityService } from '../services/personality.service';
import { Perstheme } from '../shared/perstheme';
import { PersthemeService } from '../services/perstheme.service';
import { Dimen } from '../shared/dimen';
import { DimenService } from '../services/dimen.service';
import { ToolbarCol } from '../shared/toolbar';

import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class HomeComponent implements OnInit {

  personalities: Personality[];
  persthemes: Perstheme[];
  dimens: Dimen[];
  dimentitles: string[];
  toolbars = ToolbarCol;

  constructor(private personalityservice: PersonalityService,
    private persthemeservice: PersthemeService,
    private dimenservice: DimenService,
    private dialog: MdDialog) { }

  ngOnInit() {
    this.personalityservice.getPersonalities()
      .subscribe(personalities => this.personalities = personalities);
    this.persthemeservice.getPersthemes()
      .subscribe(persthemes => this.persthemes = persthemes);
    this.dimenservice.getDimens()
      .subscribe(dimens => this.dimens = dimens);
    this.dimenservice.getDimenTitles()
      .subscribe(dimentitles => this.dimentitles = dimentitles);
  }

  openSpectrum(specId) {
    this.dialog.open(SpectrumComponent, {
      width: '800px', 
      height: '520px',
      data: specId
    });
  }

}

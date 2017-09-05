import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

import { Perstheme } from '../shared/perstheme';
import { PersthemeService } from '../services/perstheme.service';
import { Dimen } from '../shared/dimen';
import { DimenService } from '../services/dimen.service';
import { ToolbarCol } from '../shared/toolbar';

@Component({
  selector: 'app-spectrum',
  templateUrl: './spectrum.component.html',
  styleUrls: ['./spectrum.component.scss']
})
export class SpectrumComponent implements OnInit {

  persthemes: Perstheme[];
  dimens: Dimen[];
  relevantDimens: Dimen[];
  toolbars = ToolbarCol;

  constructor(@Inject(MD_DIALOG_DATA) public themeId: number,
    private persthemeservice: PersthemeService,
    private dimenservice: DimenService) { }

  ngOnInit() {
    this.persthemeservice.getPersthemes()
      .subscribe(persthemes => this.persthemes = persthemes);
    this.dimenservice.getDimens()
      .subscribe(dimens => this.dimens = dimens);
    this.dimenservice.getrelevantDimens(this.themeId)
      .subscribe(relevantDimens => this.relevantDimens = relevantDimens);
  }

}

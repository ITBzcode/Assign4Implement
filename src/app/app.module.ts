import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';


import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { SpectrumComponent } from './spectrum/spectrum.component';
import { FooterComponent } from './footer/footer.component';

import { PersonalityService } from './services/personality.service';
import { DimenService } from './services/dimen.service';
import { PersthemeService } from './services/perstheme.service';
import { QuestnService } from './services/questn.service';
import { ScoresheetService } from './services/scoresheet.service';
import { ReviewComponent } from './review/review.component';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { BaseURL } from './shared/baseurl';
import { PersonComponent } from './person/person.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent,
    HeaderComponent,
    SpectrumComponent,
    FooterComponent,
    ReviewComponent,
    PersonComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    MdTooltipModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  entryComponents: [
    SpectrumComponent,
    PersonComponent
  ],
  providers: [ PersonalityService, 
    DimenService,
    PersthemeService,
    QuestnService,
    ScoresheetService,
    { provide: 'BaseURL', useValue: BaseURL},
    ProcessHTTPMsgService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

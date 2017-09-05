import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { QuestionsComponent } from '../questions/questions.component';
import { ReviewComponent } from '../review/review.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'questions/:id', component: QuestionsComponent},
    {path: 'review/:id/:qId', component: ReviewComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
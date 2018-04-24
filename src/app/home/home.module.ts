import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TriviaOptionsComponent } from '../trivia-options/trivia-options.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  declarations: [HomeComponent, TriviaOptionsComponent]
})
export class HomeModule { }

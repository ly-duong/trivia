import { Component, OnInit } from '@angular/core';
import { TriviaOptions } from '../core/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trivia-options',
  templateUrl: './trivia-options.component.html',
  styleUrls: ['./trivia-options.component.css']
})
export class TriviaOptionsComponent implements OnInit {

  options: TriviaOptions;

  constructor() { }

  ngOnInit() {
    this.options = <TriviaOptions> {};
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TriviaOptions, TriviaCategory } from '../core/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trivia-options',
  templateUrl: './trivia-options.component.html',
  styleUrls: ['./trivia-options.component.css'],
})
export class TriviaOptionsComponent implements OnInit {
  public trivia_categories;
  options: TriviaOptions;

  @Output()
  optionsModel: EventEmitter<TriviaOptions> = new EventEmitter<TriviaOptions>();

  constructor() { }

  ngOnInit() {
    this.options = <TriviaOptions> {};
  }

  getOptions() {
    // We will emit this event to any attached event handlers
    this.optionsModel.emit(this.options);
  }


}

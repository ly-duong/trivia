import { Component, OnInit } from '@angular/core';
import { TriviaOptions, TriviaCategory } from '../core/models';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../core/services';

@Component({
  selector: 'app-trivia-options',
  templateUrl: './trivia-options.component.html',
  styleUrls: ['./trivia-options.component.css'],
  providers: [TriviaService]
})
export class TriviaOptionsComponent implements OnInit {
  public trivia_categories;
  options: TriviaOptions;

  // Suggest redefining <TriviaOptions> to match API param names exactly, and deleting callOptions:
  // redefine param names to match API:
  callOptions: {
    amount?: number,
    category?: string,
    difficulty?: string,
    type?: string
  };

  constructor(private triviaService: TriviaService) { }

  ngOnInit() {
    this.options = <TriviaOptions> {};
    this.triviaService.getCategories().subscribe(
      response => this.trivia_categories = response);
    this.options = <TriviaOptions> {};
  }

  getQuestions() {
    // If <TriviaOptions> can be redefined to match API params, eliminate below and just return this.options;
    this.callOptions = {
      amount: this.options.numQuestions,
      category: this.options.category,
      difficulty: this.options.difficulty,
      type: this.options.questionType
    };

    // Nifty trick to eliminate undefined variables from the Options object:
    this.callOptions = JSON.parse(JSON.stringify(this.callOptions));

    console.log('user options at button click: ', this.callOptions);
    return this.callOptions;
  }

}

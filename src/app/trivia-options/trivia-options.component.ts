import { Component, OnInit } from '@angular/core';
import { TriviaOptions, TriviaCategory } from '../core/models';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../core/services';

@Component({
  selector: 'app-trivia-options',
  templateUrl: './trivia-options.component.html',
  styleUrls: ['./trivia-options.component.css']
})
export class TriviaOptionsComponent implements OnInit {
  public trivia_categories;
  options: TriviaOptions;
  constructor(private triviaService: TriviaService) { }

  ngOnInit() {
    this.options = <TriviaOptions> {};
    this.triviaService.getCategories().subscribe(
    response => this.trivia_categories = response);
  }

}

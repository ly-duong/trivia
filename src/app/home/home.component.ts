import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private triviaService: TriviaService) {
  }

  ngOnInit() {
  }

}

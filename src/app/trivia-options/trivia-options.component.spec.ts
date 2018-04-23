import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TriviaOptions } from '../core/models';

import { TriviaOptionsComponent } from './trivia-options.component';
import { By } from '@angular/platform-browser';

describe('TriviaOptionsComponent', () => {
  let component: TriviaOptionsComponent;
  let fixture: ComponentFixture<TriviaOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriviaOptionsComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get number of questions from input with name "options-number"', () => {
    // When stable makes sure test is run after:
    // 1) Bindings are ready
    // 2) Any default values are loaded
    fixture.whenStable().then(() => {
      let control = fixture.debugElement.query(By.css('.question-number'));
      let element = control.nativeElement;
      element.value = 30;
      element.dispatchEvent(new Event('input'));
      expect(Number(element.value)).toBe(component.options.numQuestions);

      // Put in a second update for good measure
      element.value = 50;
      element.dispatchEvent(new Event('input'));
      expect(Number(element.value)).toBe(component.options.numQuestions);
    });
  });
});

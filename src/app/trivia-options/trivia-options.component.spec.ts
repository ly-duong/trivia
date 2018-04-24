import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TriviaOptions } from '../core/models';

import { TriviaOptionsComponent } from './trivia-options.component';
import { By } from '@angular/platform-browser';
import { TriviaService } from '../core/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TriviaOptionsComponent', () => {
  let component: TriviaOptionsComponent;
  let fixture: ComponentFixture<TriviaOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriviaOptionsComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule
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

  it('should bind amount property with input with name "options-number"', () => {
    // When stable makes sure test is run after:
    // 1) Bindings are ready
    // 2) Any default values are loaded
    fixture.whenStable().then(() => {
      const TEST_VALUE_1 = 30;
      let control = fixture.debugElement.query(By.css('.question-number'));
      let element = control.nativeElement;
      element.value = TEST_VALUE_1;
      element.dispatchEvent(new Event('input'));
      expect(component.options.amount).toBe(TEST_VALUE_1);

      // Put in a second update for good measure
      const TEST_VALUE_2 = 50;
      element.value = TEST_VALUE_2;
      element.dispatchEvent(new Event('input'));
      expect(component.options.amount).toBe(TEST_VALUE_2);
    }).catch(error => {
      expect(error).toBeFalsy();
    });
  });

  it('should bind difficulty with the radios named "options-difficulty"', () => {
    // When stable makes sure test is run after:
    // 1) Bindings are ready
    // 2) Any default values are loaded
    fixture.whenStable().then(() => {
      // Before we start, value should be nothing
      expect(component.options.difficulty).toBeFalsy();
      const TEST_VALUE = 'easy';
      let control = fixture.debugElement.query(By.css(`.options-difficulty input[value=${TEST_VALUE}]`));
      let element = control.nativeElement;
      element.dispatchEvent(new Event('change'));
      expect(component.options.difficulty).toBe(TEST_VALUE);
    }).catch(error => {
      expect(error).toBeFalsy();
    });
  });

  it('should bind category with the select named "options-category"', () => {
    // When stable makes sure test is run after:
    // 1) Bindings are ready
    // 2) Any default values are loaded
    fixture.whenStable().then(() => {
      expect(component.options.category).toBeFalsy();

      let control = fixture.debugElement.query(By.css('select[name=options-category]'));
      let element = control.nativeElement;

      const TEST_VALUE = element.querySelector('option:last-child').value; // Get last option in select
      element.value = TEST_VALUE;
      element.dispatchEvent(new Event('change'));
      expect(component.options.category).toBe(TEST_VALUE);
    }).catch(error => {
      expect(error).toBeFalsy();
    });
  });

  it('should bind type with the select named "options-type"', () => {
    // When stable makes sure test is run after:
    // 1) Bindings are ready
    // 2) Any default values are loaded
    fixture.whenStable().then(() => {
      expect(component.options.type).toBeFalsy();

      let control = fixture.debugElement.query(By.css('select[name=options-type]'));
      let element = control.nativeElement;

      const TEST_VALUE = element.querySelector('option:last-child').value; // Get last option in select
      element.value = TEST_VALUE;
      element.dispatchEvent(new Event('change'));
      expect(component.options.type).toBe(TEST_VALUE);
    }).catch(error => {
      expect(error).toBeFalsy();
    });
  });

  it('should invoke getQuestions() method when "generate questions" button is pressed', () => {
    // When stable makes sure test is run after:
    // 1) Bindings are ready
    // 2) Any default values are loaded
    fixture.whenStable().then(() => {
      spyOn(component, 'getQuestions');

      let buttonControl = fixture.debugElement.query(By.css('.get-questions'));
      let buttonElement = buttonControl.nativeElement;

      buttonElement.click();
      expect(component.getQuestions).toHaveBeenCalledTimes(1);

      // Test a second button press for repeat call:
      buttonElement.click();
      expect(component.getQuestions).toHaveBeenCalledTimes(2);

    }).catch(error => {
      expect(error).toBeFalsy();
    });
  });

  /*it('should return user options when getQuestions() method is called', () => {
    // When stable makes sure test is run after:
    // 1) Bindings are ready
    // 2) Any default values are loaded
    fixture.whenStable().then(() => {

    }).catch(error => {
      expect(error).toBeFalsy();
    });
  });*/

});

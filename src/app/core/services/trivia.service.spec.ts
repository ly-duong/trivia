import { async, TestBed, inject } from '@angular/core/testing';
import { HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TriviaService } from './trivia.service';

describe('TriviaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [TriviaService]
    });
  });

  it('should be created', inject([TriviaService], (service: TriviaService) => {
    expect(service).toBeTruthy();
  }));

  it('should reference correct URL to retrieve categories', async(inject([TriviaService, HttpTestingController], (service: TriviaService, backend: HttpTestingController) => {
    console.log('testing service!');
    service.getCategories()
    .subscribe();
    backend.expectOne((request: HttpRequest<any>) => {
      console.log(request);
      return request.url === 'https://opentdb.com/api_category.php';
    });
  })));

});

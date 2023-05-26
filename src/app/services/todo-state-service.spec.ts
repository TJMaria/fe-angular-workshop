import { TestBed } from '@angular/core/testing';

import { TodoStateService } from './todo-state-service.service';

describe('TodoStateServiceService', () => {
  let service: TodoStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

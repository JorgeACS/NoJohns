import { TestBed } from '@angular/core/testing';

import { RulesetsService } from './rulesets.service';

describe('RulesetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RulesetsService = TestBed.get(RulesetsService);
    expect(service).toBeTruthy();
  });
});

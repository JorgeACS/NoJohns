import { TestBed } from '@angular/core/testing';

import { SmashGamesService } from './smash-games.service';

describe('SmashGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmashGamesService = TestBed.get(SmashGamesService);
    expect(service).toBeTruthy();
  });
});

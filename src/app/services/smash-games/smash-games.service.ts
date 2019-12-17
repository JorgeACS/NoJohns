import { Injectable } from '@angular/core';
import {Game} from '../../models/game/game';

@Injectable({
  providedIn: 'root'
})
export class SmashGamesService {

  private smashGames: Game[] = [
    {
      id: '64',
      shorthand: 'Smash 64',
      name: 'Super Smash Bros.',
      available: false
    },
    {
      id: 'melee',
      shorthand: 'Melee',
      name: 'Super Smash Bros. Melee',
      available: true
    },
    {
      id: 'brawl',
      shorthand: 'Brawl',
      name: 'Super Smash Bros. Brawl',
      available: false
    },
    {
      id: 'projectM',

      shorthand: 'Project M',
      name: 'Project M',
      available: false
    },
    {
      id: 'ultimate',
      shorthand: 'Ultimate',
      name: 'Super Smash Bros. Ultimate',
      available: false
    }
  ];
  constructor() { }

  public getGames(): Game[]{
    return this.smashGames;
  }
}

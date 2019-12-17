import { Component, OnInit } from '@angular/core';
import {SmashGamesService} from '../../services/smash-games/smash-games.service';
import {Game} from '../../models/game/game';

@Component({
  selector: 'app-rulesets',
  templateUrl: './rulesets.page.html',
  styleUrls: ['./rulesets.page.scss'],
})
export class RulesetsPage{

  public gameList: Game[];

  constructor() {
  }
}

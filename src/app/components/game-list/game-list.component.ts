import { Component } from '@angular/core';
import {Game} from '../../models/game/game';
import {SmashGamesService} from '../../services/smash-games/smash-games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {

  public gameList: Game[];

  constructor(private gameListService: SmashGamesService) {
    this.gameList = gameListService.getGames();
  }


}

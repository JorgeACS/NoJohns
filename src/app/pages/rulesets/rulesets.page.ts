import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/game/game';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rulesets',
  templateUrl: './rulesets.page.html',
  styleUrls: ['./rulesets.page.scss'],
})
export class RulesetsPage{

  public gameList: Game[];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  openRulesets(gameId: string){
    this.router.navigate([gameId],{relativeTo:this.route});
  }
}

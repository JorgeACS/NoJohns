import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RulesetsPage } from './rulesets.page';
import {GameListComponent} from '../../components/game-list/game-list.component';

const routes: Routes = [
    {
      path: '',
      component: RulesetsPage
    },
    { path: ':id',
      loadChildren: () => import('./../ruleset-list/ruleset-list.module').then(m => m.RulesetListPageModule) 
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RulesetsPage, GameListComponent]
})
export class RulesetsPageModule {}

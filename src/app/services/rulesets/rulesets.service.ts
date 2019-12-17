import { Injectable } from '@angular/core';
import {Ruleset} from '../../models/ruleset/ruleset';
import {Stage} from '../../models/stage/stage';
import {Storage} from '@ionic/storage';
import {ToasterService} from '../toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class RulesetsService {

  private defaultRulesets: any = {
    melee: {
      name: 'Standard',
      time: 8,
      stocks: 4,
      stageClause: 'dsr',
      strikeOrder: [1, 2, 1],
      banCount: 1,
      stages: {
        starters: ['FD', 'BF', 'YS', 'DL64', 'FoD'],
        counterpicks: ['PS']
      },
      selectionOrder: 'stage-first',
      gameCount: 'bo3',
      bo5Starts : 'top8',
      hasBans : 'bo3'
    }
  };
  constructor(private storage: Storage, private toaster: ToasterService) {
    this.prepareRulesets();
  }

  async prepareRulesets(){
    let appIsConfigured = await this.storage.get('appIsConfigured').catch(err => null);
    if(!appIsConfigured){
      let rulesetIsConfigured  = await this.storage.set('selectedRulesets',this.defaultRulesets).catch( err => null);
      if(rulesetIsConfigured){
        await this.storage.set('appIsConfigured',true).catch(err => null);
      }
    }
  }
  public async getRulesets(game: '64' | 'melee' | 'brawl' | 'projectM' | 'ultimate'): Promise<Ruleset>{
    let rulesets: Ruleset[] = await this.storage.get('rulesets').catch( err => null);
    return rulesets[game];
  }
  public async getRuleset(game: '64' | 'melee' | 'brawl' | 'projectM' | 'ultimate', name:string): Promise<Ruleset> {
    if(name === 'default' && this.defaultRulesets[game]){
      return this.defaultRulesets[game];
    }
    let rulesets: Ruleset[] = await this.storage.get('rulesets').catch( err => null);
    if(!rulesets) return;
    for(let ruleset of rulesets){
      if(ruleset.name === name){
        return ruleset;
      }
    }
    return;
  }

  public async createRuleset(game: '64' | 'melee' | 'brawl' | 'projectM' | 'ultimate', ruleset){
    /// TODO: add ruleset
    let rulesets = await this.storage.get('rulesets').catch(err => null);
    if(!rulesets) {
      this.toaster.presentToast('An error occurred while creating the ruleset. Try again later.');
      return;
    }
    rulesets[game].push(ruleset);
    await this.storage.set('rulesets', rulesets).catch(err => null);
    if(!rulesets){
      this.toaster.presentToast('An error occurred while creating the ruleset. Try again later.');
      return;
    }
    this.toaster.presentToast('Ruleset created successfully!');
    return;
  }

}

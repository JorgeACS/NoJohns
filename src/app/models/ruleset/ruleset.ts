import {Stage} from './../stage/stage';
export class Ruleset {

    public name: string;
    public time: number;
    public stocks: number;
    public stageClause: 'none' | 'dsr' | 'dsr-modified';
    public strikeOrder: number[]; // [1,2,1] for a typical 5-stage strike, for example
    public banCount: number;
    public stages: any;
    public selectionOrder: 'stage-first' | 'character-first';
    public gameCount: 'bo3' | 'bo5';
    public bo5Starts?: 'none' | 'gf' | 'finals' | 'top8';
    public hasBans?: 'always' | 'bo3-only';
}

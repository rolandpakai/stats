import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

const homeWin = (match: MatchData, team: string): boolean => {
  return match[1] === team && match[5] === MatchResult.HomeWin
}

const awayWin = (match: MatchData, team: string): boolean => {
  return match[2] === team && match[5] === MatchResult.AwayWin
}

export class WinsAnalysis implements Analyzer {
  team: string;

  constructor(team: string) {
    this.team = team;
  }

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (homeWin(match, this.team) || awayWin(match, this.team)) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  } 
}
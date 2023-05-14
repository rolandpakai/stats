import { MatchData } from "./MatchData";
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  analyzer: Analyzer; 
  outputTarget: OutputTarget

  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport())
  }

  constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
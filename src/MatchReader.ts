import { dataStringToDate } from './utils';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { CsvFileReader, DataReader } from './CsvFileReader';

export class MatchReader {
  reader: DataReader;
  matches: MatchData[] = [];

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  constructor(reader: DataReader) {
    this.reader = reader;
  }

  load(): void {
    this.reader.read();
  
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dataStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as MatchResult,
        row[6]
      ]
    })
  }
}
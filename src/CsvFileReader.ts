import fs from 'fs';
import path from 'path';

export interface DataReader {
  read(): void;
  data: string[][];
}

export class CsvFileReader implements DataReader {  
  fileName: string;
  data: string[][] = [];

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
      encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
  }
}
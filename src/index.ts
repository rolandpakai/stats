import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

const summaryHtml = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summaryHtml.buildAndPrintReport(matchReader.matches);

const matchReaderStatic = MatchReader.fromCsv('football.csv');
const summaryStatic = Summary.winsAnalysisWithHtmlReport('Man United');

matchReaderStatic.load();
summaryStatic.buildAndPrintReport(matchReaderStatic.matches);

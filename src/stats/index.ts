import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const csvReader = new CSVFileReader('football.csv');
const reader = new MatchReader(csvReader);
reader.load();

const analysis = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);
analysis.buildAndPrintReport(reader.matches);

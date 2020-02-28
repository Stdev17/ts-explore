import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';

const csvReader = new CSVFileReader('football.csv');
const reader = new MatchReader(csvReader);
reader.load();

//const analysis = new Summary(new WinsAnalysis('Man City'), new ConsoleReport());
//analysis.buildAndPrintReport(reader.matches);
Summary.winsAnalysisWithHTML('Tottenham').buildAndPrintReport(reader.matches);

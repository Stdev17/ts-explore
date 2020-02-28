import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyzer<T> {
    run(matches: T[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHTML(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HTMLReport());
    }
    constructor(
        public analyzer: Analyzer<MatchData>,
        public outputTarget: OutputTarget
    ) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}

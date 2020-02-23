import { dateStringToDate } from './utils';
import { matchResults } from './matchResults';
import { MatchData } from './MatchData';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    public matches: MatchData[] = [];

    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as matchResults,
                    row[6]
                ];
            }
        );
    }
}

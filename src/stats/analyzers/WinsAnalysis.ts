import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { matchResults } from '../matchResults';

export class WinsAnalysis implements Analyzer<MatchData> {
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let Wins = 0;

        for (let match of matches) {
            if (match[1] === this.team && match[5] === matchResults.homeWin) {
                Wins++;
            } else if (
                match[2] === this.team &&
                match[5] === matchResults.awayWin
            ) {
                Wins++;
            }
        }
        return `${this.team} won ${Wins} games`;
    }
}

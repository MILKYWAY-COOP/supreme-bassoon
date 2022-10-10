interface IResultsContext {
  results: {};
  getCountyTotal: (county: number) => {
    RaoTotal: number;
    RutoTotal: number;
    WaihigaTotal: number;
    WajackoyahTotal: number;
    totals: number;
    RaoPercentage: number;
    RutoPercentage: number;
    WaihigaPercentage: number;
    WajackoyahPercentage: number;
  };

  totals: number;
  RailaOdingaTotal: number;
  RutoWilliamTotal: number;
  WaihigaDavidTotal: number;
  WajackoyahGeorgeTotal: number;

  getTopCandidate: (county: number) => {
    name: string;
    votes: number;
  };

  getCandidateInfo: (candidate: string) =>
    | {
        party: string;
        color: string;
      }
    | undefined;

  RaoPercentage: number;
  RutoPercentage: number;
  WaihigaPercentage: number;
  WajackoyahPercentage: number;
}

export interface Info {
  county: string | any;
  topCandidate: string | any;
  secondCandidate: string | any;
  thirdCandidate: string | any;
  fourthCandidate: string | any;
  topCandidateVotes: number | any;
  secondCandidateVotes: number | any;
  thirdCandidateVotes: number | any;
  fourthCandidateVotes: number | any;
  topCandidatePercent: number | any;
  secondCandidatePercent: number | any;
  thirdCandidatePercent: number | any;
  fourthCandidatePercent: number | any;
  topCandidateColor: string | any;
  secondCandidateColor: string | any;
  thirdCandidateColor: string | any;
  fourthCandidateColor: string | any;
}

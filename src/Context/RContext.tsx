import React, { createContext, useContext, useEffect, useState } from 'react';
import results2022 from '../Data/2022';

// Create a interface for getCountyTotal, overallTotals
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
}

const ResultsContext = createContext<IResultsContext | null>(null);

export const useResultsContext = () => useContext(ResultsContext);

// Create interface for children
interface Props {
  children: React.ReactNode;
}

export const ResultsProvider = ({ children }: Props) => {
  const [results, setResults] = useState(results2022);

  useEffect(() => {
    setResults(results2022);
  }, []);

  let RailaOdingaTotal = 0;
  let RutoWilliamTotal = 0;
  let WaihigaDavidTotal = 0;
  let WajackoyahGeorgeTotal = 0;

  for (let i = 0; i < results.length; i++) {
    RailaOdingaTotal += results[i].RailaOdinga;
    RutoWilliamTotal += results[i].RutoWilliam;
    WaihigaDavidTotal += results[i].WaihigaDavid;
    WajackoyahGeorgeTotal += results[i].WajackoyahGeorge;
  }

  let totals =
    RailaOdingaTotal +
    RutoWilliamTotal +
    WaihigaDavidTotal +
    WajackoyahGeorgeTotal;

  function getCountyTotal(county: number) {
    let RaoTotal = 0;
    let RutoTotal = 0;
    let WaihigaTotal = 0;
    let WajackoyahTotal = 0;
    for (let i = 0; i < results.length; i++) {
      if (results[i].Id === county) {
        RaoTotal += results[i].RailaOdinga;
        RutoTotal += results[i].RutoWilliam;
        WaihigaTotal += results[i].WaihigaDavid;
        WajackoyahTotal += results[i].WajackoyahGeorge;
      }
    }
    let totals = RaoTotal + RutoTotal + WaihigaTotal + WajackoyahTotal;
    //calculate percentages and round to 2 decimal places
    let RaoPercentage = Math.round((RaoTotal / totals) * 10000) / 100;
    let RutoPercentage = Math.round((RutoTotal / totals) * 10000) / 100;
    let WaihigaPercentage = Math.round((WaihigaTotal / totals) * 10000) / 100;
    let WajackoyahPercentage = Math.round((WajackoyahTotal / totals) * 10000) / 100;

    return {
      RaoTotal,
      RutoTotal,
      WaihigaTotal,
      WajackoyahTotal,
      totals,
      RaoPercentage,
      RutoPercentage,
      WaihigaPercentage,
      WajackoyahPercentage
    };
  }

  // get the top candidate in a county
  function getTopCandidate(county: number) {
    const { RaoTotal, RutoTotal, WaihigaTotal, WajackoyahTotal } =
      getCountyTotal(county);
    const candidates = [
      { name: 'Raila Odinga', votes: RaoTotal },
      { name: 'Ruto William', votes: RutoTotal },
      { name: 'Waihiga David', votes: WaihigaTotal },
      { name: 'Wajackoyah George', votes: WajackoyahTotal }
    ];

    const sortedCandidates = candidates.sort((a, b) => b.votes - a.votes);
    const topCandidate = sortedCandidates[0];
    return topCandidate;
  }

  return (
    <ResultsContext.Provider
      value={{
        RailaOdingaTotal,
        RutoWilliamTotal,
        WaihigaDavidTotal,
        WajackoyahGeorgeTotal,
        totals,
        getCountyTotal,
        results,
        getTopCandidate
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

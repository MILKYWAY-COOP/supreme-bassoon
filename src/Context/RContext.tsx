import React, { createContext, useContext, useEffect, useState } from 'react';
import results2022 from '../Data/2022';
import { IResultsContext } from '../Elements/types';

const ResultsContext = createContext<IResultsContext | null>(null);

export const useResultsContext = () => useContext(ResultsContext);

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
    let RaoPercentage = Math.round((RaoTotal / totals) * 10000) / 100;
    let RutoPercentage = Math.round((RutoTotal / totals) * 10000) / 100;
    let WaihigaPercentage = Math.round((WaihigaTotal / totals) * 10000) / 100;
    let WajackoyahPercentage =
      Math.round((WajackoyahTotal / totals) * 10000) / 100;

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

  function getCandidateInfo(candidate: string) {
    const candidates = [
      { color: 'var(--rao)', party: 'AZIMIO' },
      {  color: 'var(--wsr)', party: 'HUSTLER' },
      {  color: 'var(--wm)', party: 'AGANO' },
      {  color: 'var(--gw)', party: 'ROOTS' }
    ];

    if (candidate === 'Raila Odinga') {
      return candidates[0];
    } else if (candidate === 'Ruto William') {
      return candidates[1];
    }
    if (candidate === 'Waihiga David') {
      return candidates[2];
    }
    if (candidate === 'Wajackoyah George') {
      return candidates[3];
    }
  }

  function getPercentage(candidateTotal: number, total: number) {
    return Math.round((candidateTotal / total) * 10000) / 100;
  }

  const RaoPercentage = getPercentage(RailaOdingaTotal, totals);
  const RutoPercentage = getPercentage(RutoWilliamTotal, totals);
  const WaihigaPercentage = getPercentage(WaihigaDavidTotal, totals);
  const WajackoyahPercentage = getPercentage(WajackoyahGeorgeTotal, totals);


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
        getTopCandidate,
        getCandidateInfo,
        RaoPercentage,
        RutoPercentage,
        WaihigaPercentage,
        WajackoyahPercentage
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

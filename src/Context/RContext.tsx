import React, { createContext, useContext, useEffect, useState } from 'react';
import results2022 from '../Data/2022';

// Create a interface for getCountyTotal, overallTotals
interface ResultsContext {
  getCountyTotal: (county: string) => {
    RaoTotal: number;
    RutoTotal: number;
    WaihigaTotal: number;
    WajackoyahTotal: number;
  };
  totals: number;
  RailaOdingaTotal: number;
  RutoWilliamTotal: number;
  WaihigaDavidTotal: number;
  WajackoyahGeorgeTotal: number;
}

const ResultsContext = createContext<ResultsContext | null>(null);

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

  function getCountyTotal(county: string) {
    county = county.toUpperCase();
    let RaoTotal = 0;
    let RutoTotal = 0;
    let WaihigaTotal = 0;
    let WajackoyahTotal = 0;
    for (let i = 0; i < results.length; i++) {
      if (results[i].County === county) {
        RaoTotal += results[i].RailaOdinga;
        RutoTotal += results[i].RutoWilliam;
        WaihigaTotal += results[i].WaihigaDavid;
        WajackoyahTotal += results[i].WajackoyahGeorge;
      }
    }
    return { RaoTotal, RutoTotal, WaihigaTotal, WajackoyahTotal };
  }

  return (
    <ResultsContext.Provider
      value={{
        RailaOdingaTotal,
        RutoWilliamTotal,
        WaihigaDavidTotal,
        WajackoyahGeorgeTotal,
        totals,
        getCountyTotal
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

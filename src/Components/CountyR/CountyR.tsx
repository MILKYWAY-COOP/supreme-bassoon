import { useEffect, useState } from 'react';

import { useResultsContext } from '../../Context/RContext';
import Styles from './CountyR.module.scss';
import { Info } from '../../Elements/types';

interface IProps {
  county: string;
  countyNo: number;
  key: number;
}

export const CountyR = (props: IProps) => {
  const [info, setInfo] = useState<Info>({
    county: '',
    topCandidate: '',
    secondCandidate: '',
    thirdCandidate: '',
    fourthCandidate: '',

    topCandidateVotes: 0,
    secondCandidateVotes: 0,
    thirdCandidateVotes: 0,
    fourthCandidateVotes: 0,

    topCandidatePercent: 0,
    secondCandidatePercent: 0,
    thirdCandidatePercent: 0,
    fourthCandidatePercent: 0,

    topCandidateColor: '',
    secondCandidateColor: '',
    thirdCandidateColor: '',
    fourthCandidateColor: ''
  });

  const { getCountyTotal } = useResultsContext()!;

  const {
    RaoTotal,
    RutoTotal,
    WaihigaTotal,
    WajackoyahTotal,
    RaoPercentage,
    RutoPercentage,
    WaihigaPercentage,
    WajackoyahPercentage
  } = getCountyTotal(props.countyNo);

  const unSortedTotals = {
    'Raila Odinga': RaoTotal,
    'Ruto William': RutoTotal,
    'Waihiga David': WaihigaTotal,
    'Wajackoyah George': WajackoyahTotal
  };

  const sortedTotals = Object.entries(unSortedTotals).sort((a, b) => a[1] - b[1]);
  const unSortedPercentages = [
    RaoPercentage,
    RutoPercentage,
    WaihigaPercentage,
    WajackoyahPercentage
  ];
  const sortedPercentages = unSortedPercentages.sort((a, b) => b - a);

  useEffect(() => {
    setInfo({
      ...info,
      county: props.county,
      topCandidate: sortedTotals[3][0],
      secondCandidate: sortedTotals[2][0],
      thirdCandidate: sortedTotals[1][0],
      fourthCandidate: sortedTotals[0][0],

      topCandidateVotes: sortedTotals[3][1],
      secondCandidateVotes: sortedTotals[2][1],
      thirdCandidateVotes: sortedTotals[1][1],
      fourthCandidateVotes: sortedTotals[0][1],

      topCandidatePercent: sortedPercentages[0],
      secondCandidatePercent: sortedPercentages[1],
      thirdCandidatePercent: sortedPercentages[2],
      fourthCandidatePercent: sortedPercentages[3]
    });
  }, [props.county, sortedTotals, sortedPercentages, info]);

  return (
    <div className={Styles.main}>
      <h2>{info.county}</h2>
      <table>
        <tr className={Styles.title}>
          <th>Candidates</th>
          <th>Votes</th>
          <th>%</th>
        </tr>
        <tbody>
          <tr>
            <th>{info.topCandidate}</th>
            <td>{info.topCandidateVotes}</td>
            <td>{info.topCandidatePercent}</td>
          </tr>
          <tr>
            <th>{info.secondCandidate}</th>
            <td>{info.secondCandidateVotes}</td>
            <td>{info.secondCandidatePercent}</td>
          </tr>
          <tr>
            <th>{info.thirdCandidate}</th>
            <td>{info.thirdCandidateVotes}</td>
            <td>{info.thirdCandidatePercent}</td>
          </tr>
          <tr>
            <th>{info.fourthCandidate}</th>
            <td>{info.fourthCandidateVotes}</td>
            <td>{info.fourthCandidatePercent}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountyR;

import Styles from './Card.module.scss';
import { useResultsContext } from '../../Context/RContext';

export const Card = () => {
  const {
    RailaOdingaTotal,
    RutoWilliamTotal,
    WaihigaDavidTotal,
    WajackoyahGeorgeTotal,
    RaoPercentage,
    RutoPercentage,
    WaihigaPercentage,
    WajackoyahPercentage,
    getCandidateInfo
  } = useResultsContext()!;

  // add commas to numbers
  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.titles}>
        <h1>CANDIDATE</h1>
        <h1>VOTES(%)</h1>
        <h1>PARTY</h1>
      </div>

      <div
        className={Styles.minors}
        style={{
          backgroundColor: `${getCandidateInfo('Ruto William')?.color}`
        }}
      >
        <h2>WILLIAM RUTO</h2>
        <h3>{`${numberWithCommas(RutoWilliamTotal)} (${RutoPercentage}%)`}</h3>
        <h3>{getCandidateInfo('Ruto William')?.party}</h3>
      </div>

      <div
        className={Styles.minors}
        style={{
          backgroundColor: `${getCandidateInfo('Raila Odinga')?.color}`
        }}
      >
        <h2>MZEE RAO</h2>
        <h3>{`${numberWithCommas(RailaOdingaTotal)} (${RaoPercentage}%)`}</h3>
        <h3>{getCandidateInfo('Raila Odinga')?.party}</h3>
      </div>
      <div
        className={Styles.minors}
        style={{
          backgroundColor: `${getCandidateInfo('Wajackoyah George')?.color}`
        }}
      >
        <h2>GEORGE WAJAKOYA</h2>
        <h3>{`${numberWithCommas(
          WajackoyahGeorgeTotal
        )} (${WajackoyahPercentage}%)`}</h3>
        <h3>{getCandidateInfo('Wajackoyah George')?.party}</h3>
      </div>
      <div
        className={Styles.minors}
        style={{
          backgroundColor: `${getCandidateInfo('Waihiga David')?.color}`
        }}
      >
        <h2>WAIHIGA MWAURA</h2>
        <h3>{`${numberWithCommas(WaihigaDavidTotal)} (${WaihigaPercentage}%)`}</h3>
        <h3>{getCandidateInfo('Waihiga David')?.party}</h3>
      </div>
    </div>
  );
}


export default Card
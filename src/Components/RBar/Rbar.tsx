import Styles from './Rbar.module.scss';
import { Elements } from '../../Elements';
import { useResultsContext } from '../../Context/RContext';

export const Rbar = () => {
  const {
    RailaOdingaTotal,
    RutoWilliamTotal,
    WaihigaDavidTotal,
    WajackoyahGeorgeTotal,
    totals
  } = useResultsContext()!;

  function getPercentage(candidateTotal: number, total: number) {
    return Math.round((candidateTotal / total) * 10000) / 100;
  }

  const RaoPercentage = getPercentage(RailaOdingaTotal, totals);
  const RutoPercentage = getPercentage(RutoWilliamTotal, totals);
  const WaihigaPercentage = getPercentage(WaihigaDavidTotal, totals);
  const WajackoyahPercentage = getPercentage(WajackoyahGeorgeTotal, totals);

  return (
    <div className={Styles.main}>
      <div className={Styles.top}>
        <div className={Styles.ruto}>
          <img src={Elements.Ruto} alt='ruto' />
          <h3>Ruto</h3>
          <p>{RutoPercentage}%</p>
        </div>
        <div className={Styles.rao}>
          <img src={Elements.Rao} alt='ruto' />
          <h3>Rao</h3>
          <p>{RaoPercentage}%</p>
        </div>
      </div>
      <div className={Styles.bottom}>
        <div
          className={Styles.wr}
          style={{ width: `${RutoPercentage}%` }}
        ></div>
        <div className={Styles.ro} style={{ width: `${RaoPercentage}%` }}></div>
        <div
          className={Styles.gw}
          style={{ width: `${WajackoyahPercentage}%` }}
        ></div>
        <div
          className={Styles.wm}
          style={{ width: `${WaihigaPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Rbar;

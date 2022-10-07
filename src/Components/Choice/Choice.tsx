import { Elements } from '../../Elements';
import Styles from './Choice.module.scss';

const Choice = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.image}>
        <img src={Elements.Choice} alt='choice'/>
      </div>
      <div className={Styles.years}>
        <span>2022</span>
        <span>2022 - RERUN</span>
        <span>2017</span>
        <span>2013</span>
      </div>
    </div>
  );
};

export default Choice;

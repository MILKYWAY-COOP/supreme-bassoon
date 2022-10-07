import { Choice, Rbar } from '../Components';
import Styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={Styles.home}>
      <Choice />
      <Rbar />
    </div>
  );
};


export default Home;
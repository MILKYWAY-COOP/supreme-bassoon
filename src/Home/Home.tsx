import { Choice } from '../Components';
import Styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={Styles.home}>
      <Choice />
    </div>
  );
};


export default Home;
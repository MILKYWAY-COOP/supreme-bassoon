import { Choice, Rbar } from '../Components';
import Styles from './Home.module.scss';

export const Home = () => {
  //get the current date, and time in hours and minutes
  const date = new Date();
  const time = date.getHours();
  const minutes = date.getMinutes();

  console.log(time, minutes);

  return (
    <div className={Styles.home}>
      <Choice />
      <Rbar />
    </div>
  );
};


export default Home;
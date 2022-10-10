import { Choice, Rbar, Kenya, Card, CountyR } from '../Components';
import Styles from './Home.module.scss';

export const Home = () => {
  let countyNo = 0;
  const counties = [
    'Mombasa',
    'Kwale',
    'Kilifi',
    'Tana River',
    'Lamu',
    'Taita Taveta',
    'Garissa',
    'Wajir',
    'Mandera',
    'Marsabit',
    'Isiolo',
    'Meru',
    'Tharaka Nithi',
    'Embu',
    'Kitui',
    'Machakos',
    'Makueni',
    'Nyandarua',
    'Nyeri',
    'Kirinyaga',
    'Murang’a',
    'Kiambu',
    'Turkana',
    'West Pokot',
    'Samburu',
    'Trans Nzoia',
    'Uasin Gishu',
    'Elgeyo Marakwet',
    'Nandi',
    'Baringo',
    'Laikipia',
    'Nakuru',
    'Narok',
    'Kajiado',
    'Kericho',
    'Bomet',
    'Kakamega',
    'Vihiga',
    'Bungoma',
    'Busia',
    'Siaya',
    'Kisumu',
    'Homa Bay',
    'Migori',
    'Kisii',
    'Nyamira',
    'Nairobi',
    'Diaspora'
  ];

  const date = new Date();
  const time = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const AMPM = time >= 12 ? 'am' : 'pm';
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  return (
    <div className={Styles.home}>
      <Choice />
      <Rbar />
      <div className={Styles.timeUpdate}>
        <p>{`Updated At ${time}:${minutes} ${AMPM}, ${month} ${day}`}</p>
      </div>

      <div className={Styles.latest}>
        <h1>LATEST RESULTS</h1>
      </div>

      <div className={Styles.inputs}>
        <select className={Styles.left}>
          <option value='President'>President</option>
          <option value='M.P'>M.P</option>
          <option value='Senator'>Senator</option>
          <option value='Women Rep.'>Women Rep.</option>
        </select>
        <select className={Styles.right}>
          <option value='0'>All Counties</option>
          <option value='1'>Mombasa</option>
          <option value='2'>Kwale</option>
          <option value='3'>Kilifi</option>
          <option value='4'>Tana River</option>
          <option value='5'>Lamu</option>
          <option value='6'>Taita Taveta</option>
          <option value='7'>Garissa</option>
          <option value='8'>Wajir</option>
          <option value='9'>Mandera</option>
          <option value='10'>Marsabit</option>
          <option value='11'>Isiolo</option>
          <option value='12'>Meru</option>
          <option value='13'>Tharaka Nithi</option>
          <option value='14'>Embu</option>
          <option value='15'>Kitui</option>
          <option value='16'>Machakos</option>
          <option value='17'>Makueni</option>
          <option value='18'>Nyandarua</option>
          <option value='19'>Nyeri</option>
          <option value='20'>Kirinyaga</option>
          <option value='21'>Murang'a</option>
          <option value='22'>Kiambu</option>
          <option value='23'>Turkana</option>
          <option value='24'>West Pokot</option>
          <option value='25'>Samburu</option>
          <option value='26'>Trans Nzoia </option>
          <option value='27'>Uasin Gishu</option>
          <option value='28'>Elgeyo Marakwet</option>
          <option value='29'>Nandi</option>
          <option value='30'>Baringo</option>
          <option value='31'>Laikipia</option>
          <option value='32'>Nakuru</option>
          <option value='33'>Narok</option>
          <option value='34'>Kajiado</option>
          <option value='35'>Kericho</option>
          <option value='36'>Bomet</option>
          <option value='37'>Kakamega</option>
          <option value='38'>Vihiga</option>
          <option value='39'>Bungoma</option>
          <option value='40'>Busia</option>
          <option value='41'>Siaya</option>
          <option value='42'>Kisumu</option>
          <option value='43'>Homa Bay</option>
          <option value='44'>Migori</option>
          <option value='45'>Kisii</option>
          <option value='46'>Nyamira</option>
          <option value='47'>Nairobi</option>
        </select>
      </div>

      <div className={Styles.middle}>
        <Kenya />
        <Card />
      </div>

      <div className={Styles.countyResults}>
        <h1>RESULTS PER COUNTY</h1>
        <div className={Styles.counties}>
          {counties.map(
            (county, index) => (
              (countyNo = countyNo + 1),
              (<CountyR key={index} countyNo={countyNo} county={county} />)
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Navbar } from './Components';
import { Home } from './Home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <div className='footer'>
        <p>
          &copy;2022. A{' '}
          <a
            href='https://milkyway-coop.github.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            MILKYWAY
          </a>{' '}
          PRODUCTION. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default App;

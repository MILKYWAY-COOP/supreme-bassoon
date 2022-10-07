import { useContext } from 'react';

import { Navbar } from './Components';
import { Home } from './Home/Home';
import { useResultsContext } from './Context/RContext';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Home />
    </div>
  );
}

export default App;

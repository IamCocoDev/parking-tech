import './App.css';
import {Route} from 'react-router-dom';

//COMPONENTS
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ParkingCards from './components/parkingcards/ParkingCards';

//CONTEXT
import ParkingState from './context/ParkingState';

function App() {
  return (
    <ParkingState>
      <Route path='/' component={Navbar}/>
      <Route path='/' component={Home}/>
      <Route path='/' component={ParkingCards}/>
    </ParkingState>
  );
}

export default App;

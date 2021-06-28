import './App.css';
import { useState } from 'react';
import ReservationModal from './Components/ReservationModal';
import Navbar from './Components/Navbar';


function App() {

  const [ReservationIsShown, setReservationIsShown] = useState(false);    

  const showReservationHandler = () => {
    setReservationIsShown(true);
  }

  const hideReservationHandler = () => {
    setReservationIsShown(false);
  } 
  return (
    <div className="App">
    {ReservationIsShown && <ReservationModal onClose={hideReservationHandler} />}
     <Navbar onShowReservation={showReservationHandler}/>
     <main>

     </main>
    </div>
  );
}

export default App;

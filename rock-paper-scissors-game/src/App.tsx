import { useState } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import Pentagon from './components/Pentagon';
import Score from './components/Score';
// import Lizard from './components/icons/Lizard';
// import Paper from './components/icons/Paper';
// import Rock from './components/icons/Rock';
// import Scissors from './components/icons/Scissors';
// import Spock from './components/icons/Spock';

function App() {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  return (
    <main className="container">
     {/* <Rock classType="circle" />
     <Paper classType="circle" />
     <Scissors classType="circle" />
     <Lizard classType="circle" />
     <Spock classType="circle" /> */}
     <Score />
     {toggleDisplay?<GamePage /> : <Pentagon />}
    </main>
  );
}

export default App;

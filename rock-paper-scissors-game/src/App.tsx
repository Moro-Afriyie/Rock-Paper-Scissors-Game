import { useEffect, useState } from 'react';
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
  const [iconSelected, setIconSelected] = useState('');

   const handleToggleDisplay= (value:boolean, icon:string):void =>{
    setToggleDisplay(value);
    setIconSelected(icon);
  }

  // useEffect(()=>{
  //   handleToggleDisplay(toggleDisplay,iconSelected);
  // },[iconSelected, toggleDisplay]);
 
  return (
    <main className="container">
     <Score />
     {toggleDisplay?
     <GamePage iconSelected={iconSelected} /> 
     : 
     <Pentagon handleToggleDisplay={handleToggleDisplay}/>}
    </main>
  );
}

export default App;

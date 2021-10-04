import { useState } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import Pentagon from './components/Pentagon';
import Score from './components/Score';


function App() {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  const [iconSelected, setIconSelected] = useState('');
  const [score, setScore] = useState(0);

   const handleToggleDisplay= (value:boolean, icon:string):void =>{
    setToggleDisplay(value);
    setIconSelected(icon);
  }
 
  return (
    <main className="container">
     <Score score={score}/>
     {toggleDisplay?
     <GamePage 
     iconSelected={iconSelected}
     handleToggleDisplay={handleToggleDisplay}
     setScore={setScore} /> 
     : 
     <Pentagon handleToggleDisplay={handleToggleDisplay}/>}
    </main>
  );
}

export default App;

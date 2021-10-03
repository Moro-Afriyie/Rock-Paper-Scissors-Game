import { useState } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import Pentagon from './components/Pentagon';
import Score from './components/Score';


function App() {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  
  const [iconSelected, setIconSelected] = useState('');

   const handleToggleDisplay= (value:boolean, icon:string):void =>{
    setToggleDisplay(value);
    setIconSelected(icon);
  }
 
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

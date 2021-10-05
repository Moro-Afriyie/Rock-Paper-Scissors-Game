import { useState } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import Pentagon from './components/Pentagon';
import Score from './components/Score';

const options: string[] = ["scissors", "spock","paper","rock","lizard"];

function App() {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  const [playerIcon, setPlayerIcon] = useState('');
  const [score, setScore] = useState(0);
  const [computerIcon, setComputerIcon] = useState(""); //computerIcon

   const handleToggleDisplay= (value:boolean, icon:string):void =>{
    let num = Math.floor(Math.random()*options.length);
    setComputerIcon(options[num]);
    setToggleDisplay(value);
    setPlayerIcon(icon);
  }
 
  return (
  <main className="App">
    <section className="container">
     <Score score={score}/>
     {toggleDisplay?
     <GamePage 
     playerIcon={playerIcon}
     handleToggleDisplay={handleToggleDisplay}
     setScore={setScore}
     computerIcon ={computerIcon}
      /> 
     : 
     <Pentagon handleToggleDisplay={handleToggleDisplay}/>}
    </section>
    <footer className="footer">
      <div className="rules-modal">
        <button>RULES</button>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Moro Owusu Afriyie</a>.
      </div>
    </footer>
  </main>
  );
}

export default App;

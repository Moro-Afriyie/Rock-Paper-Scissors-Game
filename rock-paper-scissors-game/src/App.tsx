import { useState } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import Pentagon from './components/Pentagon';
import Score from './components/Score';
import Modal from 'react-modal';
import rules from '../src/images/image-rules-bonus.svg';
import close from '../src/images/icon-close.svg'

Modal.setAppElement('#root');

const options: string[] = ["scissors", "spock","paper","rock","lizard"];

function App() {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  const [playerIcon, setPlayerIcon] = useState('');
  const [score, setScore] = useState(0);
  const [computerIcon, setComputerIcon] = useState(""); //computerIcon
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    <Modal
    isOpen={modalIsOpen}
    closeTimeoutMS={500}
    >
      <div className="modal_content">
        <div className="game_rules">
          <h3>RULES</h3>
        <img onClick={()=>setModalIsOpen(false)} src={close }alt="close button" className="close" />
        </div>
        <img src={rules }alt="game rules" className="rules_img" />
        
      </div>
    </Modal>
    <footer className="footer">
        <button onClick={()=>setModalIsOpen(true)}>RULES</button>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Moro Owusu Afriyie</a>.
      </div>
    </footer>
  </main>
  );
}

export default App;

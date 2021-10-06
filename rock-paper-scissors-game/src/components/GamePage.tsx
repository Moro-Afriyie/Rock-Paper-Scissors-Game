import * as React from 'react';
import { useState, useEffect} from 'react';
import { GamePageProps } from '../models/interface';
import Lizard from './icons/Lizard';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import Spock from './icons/Spock';


const GamePage: React.FunctionComponent<GamePageProps> = (props) => {
  const { playerIcon, computerIcon, handleToggleDisplay, setScore } = props;
  const [control, setControl] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const chooseIcon = (value: string) => {
    if (value === "rock") {
      return <Rock classType="circle-big rock" />
    }
    else if (value === "paper") {
      return <Paper classType="circle-big paper" />
    }
    else if (value === "scissors") {
      return <Scissors classType="circle-big scissors" />
    }
    else if (value === "lizard") {
      return <Lizard classType="circle-big lizard" />
    }
    else if (value === "spock") {
      return <Spock classType="circle-big spock" />
    }
  }


  const updateScore = (status:string)=>{
        setControl(true);
        setStatus(status);
        if(status === "you win 🏆"){
            setTimeout(()=>{
          setScore(prev=> prev+1);
        },300);
        }
        else if(status === "draw 😁"){
            return ;
        }
        else{
          setTimeout(()=>{
          setScore(prev=> prev-1);
        },300);
        } 
  }
  const handleScore = (player:string, computer:string)=>{
  /**
    Scissors beats Paper
    Paper beats Rock
    Rock beats Lizard
    Lizard beats Spock
    Spock beats Scissors
    Scissors beats Lizard
    Paper beats Spock
    Rock beats Scissors
    Lizard beats Paper
    Spock beats Rock
   */
  if(player === "scissors" && computer === "paper"){
    updateScore("you win 🏆");
  }
  else if(player === "paper" && computer === "rock"){
    updateScore("you win 🏆");
    // updateScore("you win");
  }
   else if(player === "lizard" && computer === "spock"){
    updateScore("you win 🏆");
  }
   else if(player === "rock" && computer === "lizard"){
    updateScore("you win 🏆");
  }
   else if(player === "spock" && computer === "scissors"){
    updateScore("you win 🏆");
  }
   else if(player === "scissors" && computer === "lizard"){
    updateScore("you win 🏆");
  }
   else if(player === "paper" && computer === "spock"){
    updateScore("you win 🏆");
  }
   else if(player === "rock" && computer === "scissors"){
    updateScore("you win 🏆");
  }
   else if(player === "lizard" && computer === "paper"){
    updateScore("you win 🏆");
  }
   else if(player === "spock" && computer === "rock"){
    updateScore("you win 🏆");
  }
   else if (player === computer || computer === player) {
         updateScore("draw 😁");
      }
  else{
    updateScore("you lose 😔");
  }
  }
  useEffect(()=>{
   console.log({playerIcon, computerIcon});
    setTimeout(()=>{
      setIsActive(true);
          setTimeout(()=>{
      handleScore(playerIcon, computerIcon);
    },2000);
    },2000);

    return clearTimeout();
  },[]);

  const handlePlay=()=>{
    if(handleToggleDisplay !== undefined){
    handleToggleDisplay(false,"");
    setIsActive(false);
    setControl(false);
  }
  }
  return (
    <section className="game-container">
      <div className="player-side">
        <h3>YOU PICKED</h3>
        <div>
          {chooseIcon(playerIcon)}
        </div>
        {/* <div className="effect-left">
            <Rock classType="circle-big rock" />
        </div> */}
      </div>
      {control && <div className="controls">
        <h1>{status}</h1>
        <button onClick={handlePlay}>PLAY AGAIN</button>
      </div>}
      <div className="computer-side">
        <h3>THE HOUSE PICKED</h3>
        <div className={`default ${isActive?"active":""}`}>
          <div>
            {chooseIcon(computerIcon)}
          </div>
        </div>
      </div>

    </section>
  );
};

export default GamePage;

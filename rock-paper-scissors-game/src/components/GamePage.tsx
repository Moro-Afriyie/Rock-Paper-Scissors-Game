import * as React from 'react';
import { useState, useEffect} from 'react';
import { GamePageProps } from '../models/interface';
import Lizard from './icons/Lizard';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import Spock from './icons/Spock';

const options: string[] = ["rock", "paper", "scissors", "lizard", "spock"];

const GamePage: React.FunctionComponent<GamePageProps> = (props) => {
  const { playerIcon, handleToggleDisplay, setScore } = props;
  const [control, setControl] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [computerIcon, setComputerIcon] = useState(""); //computerIcon

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

  // will implement the game logic here
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
  const updateScore = ()=>{
        setControl(true);
        setTimeout(()=>{
        setScore(prev=> prev+1);
      },300);
  }
  const handleScore = (player:string, computer:string)=>{
  //   if(player==="rock"&& computer==="scissors"){
  //     setControl(true);
  //     setTimeout(()=>{
  // setScore(prev=> prev+1);
  //     },300)
  //   }
  //   else{
  //     setControl(true);
  //     setTimeout(()=>{
  // setScore(prev=> prev+1);
  //     },300)
  //   }
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
    console.log("you win");
  }
  else if(player === "paper" && computer === "rock"){
    console.log("you win");
  }
   else if(player === "lizard" && computer === "spock"){
    console.log("you win");
  }
   else if(player === "rock" && computer === "lizard"){
    console.log("you win");
  }
   else if(player === "spock" && computer === "scissors"){
    console.log("you win");
  }
   else if(player === "scissors" && computer === "lizard"){
    console.log("you win");
  }
   else if(player === "paper" && computer === "spock"){
    console.log("you win");
  }
   else if(player === "rock" && computer === "scissors"){
    console.log("you win");
  }
   else if(player === "lizard" && computer === "paper"){
    console.log("you win");
  }
   else if(player === "spock" && computer === "rock"){
    console.log("you win");
  }
  else{

  }
  }
  useEffect(()=>{
    let num = Math.floor(Math.random()*options.length);
    setTimeout(()=>{
      setIsActive(true);
      setComputerIcon(options[num]);
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
    <section className="game-container" style={!control ? { justifyContent: "center", gap: "6rem" } : {}}>
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
        <h1>YOU LOSE</h1>
        <button onClick={handlePlay}>PLAY AGAIN</button>
      </div>}
      <div className="computer-side" style={control ? { marginLeft: "auto" } : { marginLeft: "0" }}>
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

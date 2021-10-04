import * as React from 'react';
import { useState } from 'react';
import { GamePageProps } from '../models/interface';
import Lizard from './icons/Lizard';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import Spock from './icons/Spock';


const GamePage: React.FunctionComponent< GamePageProps> = (props) => {
  const [control, setControl] = useState(false);

  const chooseIcon =(value: string)=>{
    if(value ==="rock"){
      return <Rock classType="circle-big rock" />
    }
    else if(value==="paper"){
      return <Paper classType="circle-big paper" />
    }
    else if(value==="scissors"){
      return  <Scissors classType="circle-big scissors" />
    }
    else if(value==="lizard"){
      return <Lizard classType="circle-big lizard" />
    }
    else if(value==="spock"){
      return <Spock classType="circle-big spock"  />
    }

  }
  return (
    <section className="game-container" style={!control?{justifyContent:"center",gap:"6rem"}:{}}>
      <div className="player-side">
        <h3>YOU PICKED</h3>
        {chooseIcon(props.iconSelected)}
    {/* <Rock classType="circle-big rock" /> */}
        {/* <Paper classType="circle-big paper" />
        <Scissors classType="circle-big scissors" />
        <Lizard classType="circle-big lizard" />
        <Spock classType="circle-big spock"  /> */}
      </div>
      {control && <div className="controls">
        <h1>YOU LOSE</h1>
        <button>PLAY AGAIN</button>
      </div>}
      <div className="computer-side" style={control?{marginLeft:"auto"}:{marginLeft:"0"}}>
        <h3>THE HOUSE PICKED</h3>
        {control?chooseIcon(props.iconSelected):
        <div className="default">
        </div> }
      </div>
        
     </section>
  ) ;
};

export default GamePage;

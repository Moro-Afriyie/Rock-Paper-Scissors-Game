import * as React from 'react';
import { GamePageProps } from '../models/interface';
import Lizard from './icons/Lizard';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import Spock from './icons/Spock';


const GamePage: React.FunctionComponent< GamePageProps> = (props) => {
  return (
    <section className="game-container">
      <div className="player-side">
        <h3>YOU PICKED</h3>
    <Rock classType="circle-big rock" />
        {/* <Paper classType="circle-big paper" />
        <Scissors classType="circle-big scissors" />
        <Lizard classType="circle-big lizard" />
        <Spock classType="circle-big spock"  /> */}
      </div>
      <div className="controls">
        <h1>YOU LOSE</h1>
        <button>PLAY AGAIN</button>
      </div>
      <div className="computer-side">
        <h3>THE HOUSE PICKED</h3>
        <Rock classType="circle-big rock" />
      </div>
        
     </section>
  ) ;
};

export default GamePage;

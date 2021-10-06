import * as React from 'react';
import { ScoreProps } from '../models/interface';
import logoBonus from '../images/logo-bonus.svg';
import logo from '../images/logo.svg';

const Score: React.FunctionComponent< ScoreProps> = ({score,toggle}) => {
  return(
  <section className="score-container">
      <div className="score-names">
          <img src={toggle? logoBonus : logo} alt="rock,paper,scissors,lizard,spock logo"  />
      </div>
      <div className="score">
        <p>SCORE</p>
        <h1>{score}</h1>
      </div>
  </section>) ;
};

export default Score;

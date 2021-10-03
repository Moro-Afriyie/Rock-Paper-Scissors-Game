import * as React from 'react';
import { ScoreProps } from '../models/interface';
import logo from '../images/logo-bonus.svg';

const Score: React.FunctionComponent< ScoreProps> = (props) => {
  return(
  <section className="score-container">
      <div className="score-names">
          <img src={logo} alt=""  />
      </div>
      <div className="score">
        <p>SCORE</p>
        <h1>12</h1>
      </div>
  </section>) ;
};

export default Score;

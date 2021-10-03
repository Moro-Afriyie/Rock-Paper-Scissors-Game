import * as React from 'react';
import { GamePageProps } from '../models/interface';


const GamePage: React.FunctionComponent< GamePageProps> = (props) => {
  return (<h1>{props.iconSelected}</h1>) ;
};

export default GamePage;

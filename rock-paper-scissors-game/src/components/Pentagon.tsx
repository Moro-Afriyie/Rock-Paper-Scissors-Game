import * as React from 'react';
import { PentagonProps } from '../models/interface';
import Lizard from './icons/Lizard';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import Spock from './icons/Spock';



const Pentagon: React.FunctionComponent< PentagonProps> = ({handleToggleDisplay}) => {
  return (
    <section className="pentagon-container">
        <Rock classType="circle" handleToggleDisplay={handleToggleDisplay}/>
        <Paper classType="circle" handleToggleDisplay={handleToggleDisplay}/>
        <Scissors classType="circle" handleToggleDisplay={handleToggleDisplay}/>
        <Lizard classType="circle" handleToggleDisplay={handleToggleDisplay}/>
        <Spock classType="circle" handleToggleDisplay={handleToggleDisplay} />
     </section>
     );
};

export default Pentagon;

import * as React from 'react';
import { PentagonProps } from '../models/interface';
import Lizard from './icons/Lizard';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import Spock from './icons/Spock';
import pentagon from '../images/bg-pentagon.svg';



const Pentagon: React.FunctionComponent< PentagonProps> = ({handleToggleDisplay}) => {
  return (
    <section className="pentagon-container">
        {/* <img src={pentagon} alt="pentagon" /> */}
        <Rock classType="circle rock" handleToggleDisplay={handleToggleDisplay}/>
        <Paper classType="circle paper" handleToggleDisplay={handleToggleDisplay}/>
        <Scissors classType="circle scissors" handleToggleDisplay={handleToggleDisplay}/>
        <Lizard classType="circle lizard" handleToggleDisplay={handleToggleDisplay}/>
        <Spock classType="circle spock" handleToggleDisplay={handleToggleDisplay} />
     </section>
     );
};

export default Pentagon;

import * as React from 'react';
import Lizard from './icons/Lizard';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import Spock from './icons/Spock';

interface  PentagonProps {
}

const Pentagon: React.FunctionComponent< PentagonProps> = (props) => {
  return (
    <section className="pentagon-container">
        <Rock classType="circle" />
        <Paper classType="circle" />
        <Scissors classType="circle" />
        <Lizard classType="circle" />
        <Spock classType="circle" />
     </section>
     );
};

export default Pentagon;

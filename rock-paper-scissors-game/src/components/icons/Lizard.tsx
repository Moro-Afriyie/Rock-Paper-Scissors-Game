import * as React from 'react';
import lizard from "../../images/icon-lizard.svg";
import { ClassTypeProp } from '../../models/interface';

const Lizard: React.FunctionComponent< ClassTypeProp> = (props) => {
  return ( <div 
    className={props.classType}
    style={{background: "linear-gradient(hsl(261, 73%, 60%) ,hsl(261, 72%, 63%)"
     ,boxShadow: "0px 8px 1px -1px #8551e7"}}
  >
      <div className="inner-circle">
        <img src={lizard} alt="rock"/>
      </div>
    </div>);
};

export default Lizard;

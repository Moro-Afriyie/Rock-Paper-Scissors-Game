import * as React from 'react';
import lizard from "../../images/icon-lizard.svg";
import { ClassTypeProp } from '../../models/interface';

const Lizard: React.FunctionComponent< ClassTypeProp> = (props) => {
  return ( <div className={props.classType}>
      <div className="inner-circle">
        <img src={lizard} alt="rock"/>
      </div>
    </div>);
};

export default Lizard;

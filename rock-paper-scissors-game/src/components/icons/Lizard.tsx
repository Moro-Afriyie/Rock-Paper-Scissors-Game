import * as React from 'react';
import lizard from "../../images/icon-lizard.svg";
import { ClassTypeProp } from '../../models/interface';

const Lizard: React.FunctionComponent< ClassTypeProp> = (props) => {
  const {classType, handleToggleDisplay}= props;
  const handleToggle =()=>{
    if(handleToggleDisplay!== undefined){
      handleToggleDisplay(true,"lizard");
    }
  }
  return ( <div 
    className={classType}
     onClick={handleToggle}
  >
      <div className="inner-circle">
        <img src={lizard} alt="rock"/>
      </div>
    </div>);
};

export default Lizard;

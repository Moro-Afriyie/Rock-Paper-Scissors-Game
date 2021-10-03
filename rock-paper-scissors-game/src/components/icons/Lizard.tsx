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
    style={{background: "linear-gradient(hsl(261, 73%, 60%) ,hsl(261, 72%, 63%)"
     ,boxShadow: "0px 7px 1px -1px #381181"}}
     onClick={handleToggle}
  >
      <div className="inner-circle">
        <img src={lizard} alt="rock"/>
      </div>
    </div>);
};

export default Lizard;

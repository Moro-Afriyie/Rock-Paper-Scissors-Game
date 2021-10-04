import * as React from 'react';
import { ClassTypeProp } from '../../models/interface';
import scissors from "../../images/icon-scissors.svg"

const Scissors: React.FunctionComponent<ClassTypeProp> = (props) => {
  const {classType, handleToggleDisplay}= props;
  const handleToggle =()=>{
    if(handleToggleDisplay!== undefined){
      handleToggleDisplay(true,"scissors");
    }
  }
   return ( <div 
    className={classType}
   onClick={handleToggle}>
      <div className="inner-circle">
        <img src={scissors} alt="rock"/>
      </div>
    </div>);
};

export default Scissors;

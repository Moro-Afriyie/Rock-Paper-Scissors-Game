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
   style={{background: "linear-gradient(hsl(39, 89%, 49%) ,hsl(40, 84%, 53%)"
   ,boxShadow: "0px 7px 1px -1px #805505"}}
   onClick={handleToggle}>
      <div className="inner-circle">
        <img src={scissors} alt="rock"/>
      </div>
    </div>);
};

export default Scissors;

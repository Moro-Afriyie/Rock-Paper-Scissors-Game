import * as React from 'react';
import rock from "../../images/icon-rock.svg";
import { ClassTypeProp } from '../../models/interface';

const Rock: React.FC<ClassTypeProp> = (props) => {
  const {classType, handleToggleDisplay}= props;
  const handleToggle =()=>{
    if(handleToggleDisplay!== undefined){
      handleToggleDisplay(true,"rock");
    }
  }
  return ( <div 
  className={classType}
  onClick={handleToggle}>
      <div className="inner-circle">
        <img src={rock} alt="rock"/>
      </div>
    </div>);
};

export default  Rock;

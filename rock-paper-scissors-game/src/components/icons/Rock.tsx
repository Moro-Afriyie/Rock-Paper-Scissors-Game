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
  style={{background: "linear-gradient(#de3f5c,#da2f4e)"
  ,boxShadow: "0px 7px 1px -1px #971930"}}
  onClick={handleToggle}>
      <div className="inner-circle">
        <img src={rock} alt="rock"/>
      </div>
    </div>);
};

export default  Rock;

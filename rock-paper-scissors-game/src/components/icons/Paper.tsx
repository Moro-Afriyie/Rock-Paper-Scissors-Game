import * as React from 'react';
import { ClassTypeProp } from '../../models/interface';
import paper from "../../images/icon-paper.svg";

const Paper: React.FunctionComponent<ClassTypeProp> = (props) => {
  const {classType, handleToggleDisplay}= props;
  const handleToggle =()=>{
    if(handleToggleDisplay!== undefined){
      handleToggleDisplay(true);
    }
  }
  return ( <div 
  className={classType}
  style={{background: "linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))"
  ,boxShadow: "0px 7px 1px -1px #1933b9"}}
  onClick={handleToggle}>
      <div className="inner-circle">
        <img src={paper} alt="rock"/>
      </div>
    </div>);
};

export default Paper;

import * as React from 'react';
import rock from "../../images/icon-rock.svg";
import { ClassTypeProp } from '../../models/interface';

const Rock: React.FC<ClassTypeProp> = (props) => {
  return ( <div 
  className={props.classType}
  style={{background: "linear-gradient(#de3f5c,#da2f4e)",boxShadow: "0px 7px 1px -1px #971930"}}>
      <div className="inner-circle">
        <img src={rock} alt="rock"/>
      </div>
    </div>);
};

export default  Rock;

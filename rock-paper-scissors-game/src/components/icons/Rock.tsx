import * as React from 'react';
import rock from "../../images/icon-rock.svg";
import { ClassTypeProp } from '../../models/interface';

const Rock: React.FC<ClassTypeProp> = (props:ClassTypeProp) => {
  return ( <div className={props.classType}>
      <div className="inner-circle">
        <img src={rock} alt="rock"/>
      </div>
    </div>);
};

export default  Rock;

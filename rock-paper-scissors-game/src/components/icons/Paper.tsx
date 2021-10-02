import * as React from 'react';
import { ClassTypeProp } from '../../models/interface';
import paper from "../../images/icon-paper.svg";

const Paper: React.FunctionComponent<ClassTypeProp> = (props) => {
  return ( <div className={props.classType}>
      <div className="inner-circle">
        <img src={paper} alt="rock"/>
      </div>
    </div>);
};

export default Paper;

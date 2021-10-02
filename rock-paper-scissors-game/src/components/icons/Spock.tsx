import * as React from 'react';
import { ClassTypeProp } from '../../models/interface';
import spock from "../../images/icon-spock.svg";

const Spock: React.FunctionComponent<ClassTypeProp> = (props) => {
  return ( <div className={props.classType}>
      <div className="inner-circle">
        <img src={spock} alt="rock"/>
      </div>
    </div>);
};

export default Spock;

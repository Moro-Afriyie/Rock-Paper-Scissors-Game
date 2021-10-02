import * as React from 'react';
import { ClassTypeProp } from '../../models/interface';
import spock from "../../images/icon-spock.svg";

const Spock: React.FunctionComponent<ClassTypeProp> = (props) => {
  return ( <div
   className={props.classType}
     style={{background: "linear-gradient(hsl(189, 59%, 53%) ,hsl(189, 58%, 57%)"
    ,boxShadow: "0px 7px 1px -1px #0e606e"}}
   >
      <div className="inner-circle">
        <img src={spock} alt="rock"/>
      </div>
    </div>);
};

export default Spock;

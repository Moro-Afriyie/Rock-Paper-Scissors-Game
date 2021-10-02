import * as React from 'react';
import { ClassTypeProp } from '../../models/interface';
import scissors from "../../images/icon-scissors.svg"

const Scissors: React.FunctionComponent<ClassTypeProp> = (props) => {
   return ( <div 
    className={props.classType}
   style={{background: "linear-gradient(hsl(39, 89%, 49%) ,hsl(40, 84%, 53%)"
   ,boxShadow: "0px 8px 1px -1px #eca012"}}>
      <div className="inner-circle">
        <img src={scissors} alt="rock"/>
      </div>
    </div>);
};

export default Scissors;

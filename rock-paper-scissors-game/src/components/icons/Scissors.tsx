import * as React from 'react';
import { ClassTypeProp } from '../../models/interface';
import scissors from "../../images/icon-scissors.svg"

const Scissors: React.FunctionComponent<ClassTypeProp> = (props) => {
   return ( <div className={props.classType}>
      <div className="inner-circle">
        <img src={scissors} alt="rock"/>
      </div>
    </div>);
};

export default Scissors;

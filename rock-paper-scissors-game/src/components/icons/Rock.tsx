import * as React from 'react';
import rock from "../../images/icon-rock.svg";

interface RockProps {
  classType: string;
}
const Rock: React.FC<RockProps> = (props:RockProps) => {
  return ( <div className={props.classType}>
      <div className="inner-circle">
        <img src={rock} alt="rock"/>
      </div>
    </div>);
};

export default  Rock;

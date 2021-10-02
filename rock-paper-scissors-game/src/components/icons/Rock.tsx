import * as React from 'react';
import rock from "../../images/icon-rock.svg";


const Rock: React.FC = () => {
  return ( <div className="circle">
      <div className="inner-circle">
        <img src={rock} alt=""/>
      </div>
    </div>);
};

export default  Rock;

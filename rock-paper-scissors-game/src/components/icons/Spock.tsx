import * as React from "react";
import { ClassTypeProp } from "../../models/interface";
import spock from "../../images/icon-spock.svg";

const Spock: React.FunctionComponent<ClassTypeProp> = (props) => {
  const { classType, handleToggleDisplay } = props;
  const handleToggle = () => {
    if (handleToggleDisplay !== undefined) {
      handleToggleDisplay(true, "spock");
    }
  };
  return (
    <div className={classType} onClick={handleToggle}>
      <div className="inner-circle">
        <img src={spock} alt="rock" />
      </div>
    </div>
  );
};

export default Spock;

import * as React from "react";
import { ClassTypeProp } from "../../models/interface";
import paper from "../../images/icon-paper.svg";

const Paper: React.FunctionComponent<ClassTypeProp> = (props) => {
  const { classType, handleToggleDisplay } = props;
  const handleToggle = () => {
    if (handleToggleDisplay !== undefined) {
      handleToggleDisplay(true, "paper");
    }
  };
  return (
    <div className={classType} onClick={handleToggle}>
      <div className="inner-circle">
        <img src={paper} alt="rock" />
      </div>
    </div>
  );
};

export default Paper;

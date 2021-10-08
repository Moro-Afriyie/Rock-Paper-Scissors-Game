import * as React from "react";
import { PentagonProps } from "../models/interface";
import Lizard from "./icons/Lizard";
import Paper from "./icons/Paper";
import Rock from "./icons/Rock";
import Scissors from "./icons/Scissors";
import Spock from "./icons/Spock";

const Pentagon: React.FunctionComponent<PentagonProps> = ({
  toggle,
  handleToggleDisplay,
}) => {
  return (
    <section className={toggle ? "pentagon-container" : "triangle-container"}>
      <Rock classType="circle rock" handleToggleDisplay={handleToggleDisplay} />
      <Paper
        classType="circle paper"
        handleToggleDisplay={handleToggleDisplay}
      />
      <Scissors
        classType="circle scissors"
        handleToggleDisplay={handleToggleDisplay}
      />
      {toggle && (
        <Lizard
          classType="circle lizard"
          handleToggleDisplay={handleToggleDisplay}
        />
      )}
      {toggle && (
        <Spock
          classType="circle spock"
          handleToggleDisplay={handleToggleDisplay}
        />
      )}
    </section>
  );
};

export default Pentagon;

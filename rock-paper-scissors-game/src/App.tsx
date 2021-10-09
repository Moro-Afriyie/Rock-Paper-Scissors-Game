import { useState } from "react";
import React from "react";
import "./App.css";
import GamePage from "./components/GamePage";
import Pentagon from "./components/Pentagon";
import Score from "./components/Score";
import Modal from "react-modal";
import rulesBonus from "../src/images/image-rules-bonus.svg";
import rules from "../src/images/image-rules.svg";
import close from "../src/images/icon-close.svg";
import Switch from "react-switch";

Modal.setAppElement("#root");

const options1 = ["rock", "paper", "scissors"];
const options2: string[] = ["scissors", "spock", "paper", "rock", "lizard"];

function App() {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  const [playerIcon, setPlayerIcon] = useState("");
  const [score, setScore] = useState(0);
  const [computerIcon, setComputerIcon] = useState(""); //computerIcon
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggleDisplay = (value: boolean, icon: string): void => {
    if (toggle) {
      let options = options2;
      const num = Math.floor(Math.random() * options.length);
      setComputerIcon(options[num]);
      setToggleDisplay(value);
      setPlayerIcon(icon);
    } else {
      let options = options1;
      const num = Math.floor(Math.random() * options.length);
      setComputerIcon(options[num]);
      setToggleDisplay(value);
      setPlayerIcon(icon);
    }
  };

  const handleChange = (toggle: boolean) => {
    setToggle(toggle);
    setScore(0);
  };

  return (
    <main className="App">
      <section className="container">
        <Score score={score} toggle={toggle} />
        {/* toggle switch component */}
        {!toggleDisplay && (
          <label htmlFor="material-switch">
            <span>Game 1</span>
            <Switch
              checked={toggle}
              onChange={handleChange}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={60}
              className="react-switch"
              id="material-switch"
            />
            <span>Game 2</span>
          </label>
        )}
        {/* toggle switch component */}
        {toggleDisplay ? (
          <GamePage
            playerIcon={playerIcon}
            handleToggleDisplay={handleToggleDisplay}
            setScore={setScore}
            computerIcon={computerIcon}
          />
        ) : (
          <Pentagon toggle={toggle} handleToggleDisplay={handleToggleDisplay} />
        )}
      </section>
      <Modal isOpen={modalIsOpen} closeTimeoutMS={500}>
        <div className="modal_content">
          <div className="game_rules">
            <h3>RULES</h3>
            <img
              onClick={() => setModalIsOpen(false)}
              src={close}
              alt="close button"
              className="close"
            />
          </div>
          <img
            src={toggle ? rulesBonus : rules}
            alt="game rules"
            className="rules_img"
          />
        </div>
      </Modal>
      <footer className="footer">
        <button onClick={() => setModalIsOpen(true)}>RULES</button>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/Moro-Afriyie/Rock-Paper-Scissors-Game"
            target="_blank"
            rel="noreferrer"
          >
            Moro Owusu Afriyie
          </a>
          .
        </div>
      </footer>
    </main>
  );
}

export default App;

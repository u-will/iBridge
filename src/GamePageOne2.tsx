import React from "react";
import { pages } from "./App";
import questionImage from "./img/discution.jpg";
import bridge from "./img/bridge.svg";
import logo from "./img/NaviBridgeLogo.jpg";
import "./GamePageOne1.css";

interface GamePageOne2ScreenProps {
  changePage: (page: pages) => void;
}

export class GamePageOne2 extends React.Component<GamePageOne2ScreenProps> {
  render() {
    return (
      <div>
        <div className="NavBar">
          <div>
            <ul>
              <div className="NavButton">
                <li onClick={(e) => this.props.changePage(pages.HomePage)}> <img src ={logo}alt="Add task" height="60" width="60"/></li>
                <li onClick={(e) => this.props.changePage(pages.InterestPage)}>Interest Page</li>
                <li onClick={(e) => this.props.changePage(pages.EducationHomePage)}>Education</li>
                <li>Resources</li>
                <li onClick={(e) => this.props.changePage(pages.ToDoPage)}>To-Do</li>
                <li onClick={(e) => this.props.changePage(pages.SettingPage)}>Settings</li>
                <li onClick={(e) => this.props.changePage(pages.SignInPage)}>Log out</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="contents">
          <h3 className="question-number">Question 2/5</h3>
          <div className="question-content">
            <h2>Level 1: Demystifying Stigmas</h2>
            <br></br>
            <p>Listed below are statements about mental health. Identify which statemtents are myths and which are facts.</p>

            <div className="question">
              <h3>Mental therapy is not for everyone.</h3>
              <img src={questionImage} />
              {/* <br></br><br></br> */}
              <div className="answer-buttons">
                <button onClick={(e) => this.props.changePage(pages.GamePageOne3)} className="answer-button">MYTH</button>
                <button onClick={(e) => this.props.changePage(pages.GamePageOne3)} className="answer-button">FACT</button>
                {/* <br></br><br></br><br></br> */}
              </div>
            </div>
          </div>

          <footer className="bridges">
            <h4>Bridges collected</h4>
            <p><b>1</b></p>
            <img src={bridge} height="60px" width="60px"/>
          </footer>

          {/* <button onClick={(e) => this.props.changePage(pages.GamePageOne2)} className="submit-button">Next</button> */}
        </div>
      </div>
    );
  }
}
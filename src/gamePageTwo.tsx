import React from "react";
import { pages } from "./App";
import './gamePageTwo.css';
import boyOne from './img/boy-icon-1jpg.jpg';
import logo from "./img/NaviBridgeLogo.jpg";
import scenarioOne from "./img/scenarioOne.png";
import ButtonState from "./ButtonComponent";
import bridgeGameIcon from './img/bridgeGameIcon.png'
import './ButtonComponent.css';

interface GamePageTwoScreenProps {
  changePage: (page: pages) => void;
}

export class GamePageTwo extends React.Component<GamePageTwoScreenProps> {
  
  render() {
    return (
      <div>
        <div className="NavBar">
          <div>
            <ul>
              <div className="NavButton">
                <li onClick={(e) => this.props.changePage(pages.HomePage)}> <img src={logo} alt="Add task" height="60" width="60" /></li>
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
        <div className="gamePageTwoGame">
        <h1 className="LevelTwo">Level 2: Communication + Community</h1>
        <p className="LevelTwoInstructions">You’ve demystified some common stigmas around mental health in the workplace. Let’s take this learning one step further by putting it into action, To start, let’s talk about inclusive communication techniques.</p>
        <h3 className="QuestionNumber">Question 1/4</h3>
        <h2 className="CommunicationTechnique">Communication Technique #1: Actively listen by validating how coworkers feel</h2>
        
  
        
        
        <div className="ChatContainer">
          <img id="pictureOne" alt="profile" height="150" width="150" src={boyOne}></img>
          <img id="pictureTwo" alt="profile" height="200" width="250" src={scenarioOne}></img>
        </div>

      

        <p className="Name"><b>How do you respond to James?</b></p>

        <div className="AnswerContainer">
          <div className="AnswerOption">
            <ButtonState buttonInput="“You shouldn’t feel that way.Your problems aren’t real.”"/>
          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“What is wrong with you?”"/>

          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“It sounds like you have a lot going on. Let me know how the team can support you.”"/>

          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“Don’t think about it; just move on.”"/>

          </div>
        </div>
        </div>
        
        <div className="greenBridge">
          <img alt="bridge" height="75" width="75" src={bridgeGameIcon}></img>
          <p>5</p>
        </div>
        
        <div className="parentNext">
          <div className="nextButton">
          <button className="button-default" onClick={(e) => this.props.changePage(pages.GamePageTwoSecond)}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}
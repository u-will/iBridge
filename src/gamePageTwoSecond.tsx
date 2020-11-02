import React from "react";
import { pages } from "./App";
import './gamePageTwo.css';
import logo from "./img/NaviBridgeLogo.jpg";
import scenarioTwo from "./img/scenarioTwo.png";
import womanTwo from './img/WomanTwo.png';
import ButtonState from "./ButtonComponent";
import bridgeGameIcon from './img/bridgeGameIcon.png'
import './ButtonComponent.css';

interface GamePageTwoSecondScreenProps {
  changePage: (page: pages) => void;
}

export class GamePageTwoSecond extends React.Component<GamePageTwoSecondScreenProps> {
  
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
        <h3 className="QuestionNumber">Question 2/4</h3>
        <h2 className="CommunicationTechnique">Communication Technique #2: Communicate person to person rather than “expert” to “victim"</h2>
        
  
        
        
        <div className="ChatContainer">
          <img id="pictureOne" alt="profile" height="150" width="150" src={womanTwo}></img>
          <img id="pictureTwo" alt="profile" height="200" width="250" src={scenarioTwo}></img>
        </div>

      

        <p className="Name"><b>How do you respond to Lily?</b></p>

        <div className="AnswerContainer">
          <div className="AnswerOption">
            <ButtonState buttonInput="“That’s your anxiety talking.”"/>
          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“I completely understand. Let’s talk about how we can split the work amongst the team.”"/>

          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“Seems like you’re doing well in my opinion. You’re probably overthinking it.”"/>

          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“If you stop being stressed all the time, you might be able to get all your work done.”"/>

          </div>
        </div>
        </div>
        <div className="greenBridge">
          <img alt="bridge" height="75" width="75" src={bridgeGameIcon}></img>
          <p>6</p>
        </div>

        <div className="parentNext">
          <div className="nextButton">
          <button className="button-default" onClick={(e) => this.props.changePage(pages.GamePageTwoThird)}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}
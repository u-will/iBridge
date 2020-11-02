import React from "react";
import { pages } from "./App";
import './gamePageTwo.css';
import womanFour from './img/womanFour.png';
import logo from "./img/NaviBridgeLogo.jpg";
import scenarioFour from "./img/scenarioFour.png";
import ButtonState from "./ButtonComponent";
import './ButtonComponent.css';
import bridgeGameIcon from './img/bridgeGameIcon.png'


interface GamePageTwoFourthScreenProps {
  changePage: (page: pages) => void;
}

export class GamePageTwoFourth extends React.Component<GamePageTwoFourthScreenProps> {
  
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
        <h3 className="QuestionNumber">Question 4/4</h3>
        <h2 className="CommunicationTechnique">Communication Technique #4: Ask if events have triggered memories of other situations or events</h2>
        
  
        
        
        <div className="ChatContainer">
          <img id="pictureOne" alt="profile" height="150" width="150" src={womanFour}></img>
          <img id="pictureTwo" alt="profile" height="200" width="250" src={scenarioFour}></img>
        </div>

      

        <p className="Name"><b>How do you respond to Chloe?</b></p>

        <div className="AnswerContainer">
          <div className="AnswerOption">
            <ButtonState buttonInput="“Imposter syndrome is very common when starting in the workplace. It’ll go away soon.”"/>
          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“No, it’s not true. You’re just new to the team.”"/>

          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“Can you tell me who is making you feel this way so I can escalate this to the manager?” "/>

          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“What makes you feel that way? Let’s talk about ways we can help you.”"/>

          </div>
        </div>
        </div>
        <div className="greenBridge">
          <img alt="bridge" height="75" width="75" src={bridgeGameIcon}></img>
          <p>8</p>
        </div>

        <div className="parentNext">
          <div className="nextButton">
          <button className="button-default" onClick={(e) => this.props.changePage(pages.GamePageTwoResults)}>SUBMIT</button>
          </div>
        </div>

      </div>
    );
  }
}
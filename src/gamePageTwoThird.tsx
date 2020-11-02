import React from "react";
import { pages } from "./App";
import './gamePageTwo.css';
import boyThree from './img/boyThree.png';
import logo from "./img/NaviBridgeLogo.jpg";
import scenarioThree from "./img/scenarioThree.png";
import ButtonState from "./ButtonComponent";
import './ButtonComponent.css';
import bridgeGameIcon from './img/bridgeGameIcon.png'


interface GamePageTwoThirdScreenProps {
  changePage: (page: pages) => void;
}

export class GamePageTwoThird extends React.Component<GamePageTwoThirdScreenProps> {
  
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
        <h3 className="QuestionNumber">Question 3/4</h3>
        <h2 className="CommunicationTechnique">Communication Technique #3: Foster resilience in your coworkers</h2>
        
  
        
        
        <div className="ChatContainer">
          <img id="pictureOne" alt="profile" height="150" width="150" src={boyThree}></img>
          <img id="pictureTwo" alt="profile" height="200" width="250" src={scenarioThree}></img>
        </div>

      

        <p className="Name"><b>How do you respond to Luis?</b></p>

        <div className="AnswerContainer">
          <div className="AnswerOption">
            <ButtonState buttonInput="“I’ve seen you get through a lot of hard times -- we can figure out this one too.”"/>
          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“You’ll do fine. It’s just a presentation.”"/>

          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“Did you not prepare? Either way you still have to give your presentation.”"/>

          </div>

          <div className="AnswerOption">
            <ButtonState buttonInput="“You shouldn’t feel that way. The situation could be much worse.”"/>

          </div>
        </div>
        </div>

        <div className="greenBridge">
          <img alt="bridge" height="75" width="75" src={bridgeGameIcon}></img>
          <p>7</p>
        </div>

        <div className="parentNext">
          <div className="nextButton">
          <button className="button-default" onClick={(e) => this.props.changePage(pages.GamePageTwoFourth)}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}
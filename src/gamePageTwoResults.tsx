import React from "react";
import { pages } from "./App";
import "./gamePageTwoResults.css";
import plus from './img/plus.png';
import randomGirl from './img/random-girl.jpg';
import ResultsBox from './ResultsBox';
import logo from './img/NaviBridgeLogo.jpg';




interface GamePageTwoResultsScreenProps {
  changePage: (page: pages) => void;
}

export class GamePageTwoResults extends React.Component<GamePageTwoResultsScreenProps> {
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
        
        <div className="content">
          <div className="resultsSection">
              <h1>Level 2: Communication Techniques + Community</h1>
          </div>
          <div id="wrapper">
            <div>
              <ResultsBox name="Your Results" score="3" questionNumber="4"
                answerRecap="The extent to which mental health patients/clients are willing to discuss traumatic events can vary, as well their emotional responses.  Feelings of fear, grief, anger, anxiety, worry, avoidance and guilt are all common. It’s important to remember to remain neutral and avoid expressing your own views or opinions with patients."
              ></ResultsBox>
            </div>
            <div className="see-tasks">
              <p>Want to learn more?</p>
              <button className="button-default" onClick={(e) => this.props.changePage(pages.EducationHomePage)}>Education Homepage</button>
            </div>
          </div>
          

          <div className="action">
            <h2>Start Acting:</h2>

            <p>Here are some ideas to get you started on creating actionable solutions towards breaking stigmas around mental health in the workplace. You can choose which tasks to add to your to-do list. </p>

            <ul className="todos">
              <li onClick={(e) => this.props.changePage(pages.ToDoPage)}><button className="plus" ><img src={plus} alt="Add task" height="20" width="20" /></button><div className="task">Plan a meeting with a manager to discuss the importance of mental wellbeing for your team.</div></li>

              <li onClick={(e) => this.props.changePage(pages.ToDoPage)}><button className="plus" ><img src={plus} alt="Add task" height="20" width="20" /></button><div className="task">Talk to a coworker you know is struggling with mental wellness (don’t forget your communication techniques!) </div></li>
            </ul>

            <div className="see-tasks">
              <p>Want to see what tasks are on your to-do list?</p>
              <button className="button-default">Wellness To Do</button>
            </div>
          </div>

          <div className="community">
            <h2>Building Community:</h2>
            <p>Are you ready to connect with other allies in your company to help support you through the process of becoming an ally for breaking mental health stigmas in the workplace?</p>

            <p>You can connect with:</p>
            <div className="connect">
              <img className="profile-img" alt="profile" height="150" width="150" src={randomGirl}></img>
              <div className="profile-button">
                <h3>Sara</h3>
                <button className="button-default">Connect</button>
              </div>
              <div className="note">
                <h2>NOTE:</h2>
                <p>You do not have to choose to connect immediately. You may continue learning, and whenever you are ready, connect with the individual by clicking on the “Connect” button.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
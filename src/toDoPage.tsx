import React from "react";
import { pages } from "./App";
import plus from './img/plus.png';
import "./toDoPage.css"
import logo from './img/NaviBridgeLogo.jpg';

interface ToDoPageScreenProps {
  changePage: (page: pages) => void;
}

export class ToDoPage extends React.Component<ToDoPageScreenProps> {
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

        <div className="content">
          <h1>Wellness To-Do</h1>
          <div className="grid">
            <div className="column to-do">
              <h2>To-Do</h2>
              <div className="new-item">
                <button className="add-button"><img src={plus} height="20" width="20" /></button>
                <div className="input">
                  <input type="text" />
                  <hr />
                </div>
            </div>
            <div className="output">
                  <input type="text" value="Plan a meeting with a manager to discuss the importance of mental wellbeing for your team." />
                  <hr />
                </div>
              </div>

            <div className="column in-progress">
              <h2>In Progress</h2>
            </div>
            <div className="column done">
              <h2>Done</h2>
              <button onClick={(e) => this.props.changePage(pages.EndOfTheGameResults)}className="confirmButton">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
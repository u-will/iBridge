import React from "react";
import { pages } from "./App";
import questionImage from "./img/question.jpg";
import bridge from "./img/bridge.svg";
import logo from "./img/NaviBridgeLogo.jpg";
import "./endOfTheGameResults.css";
import hands from "./img/hands.jpg";
import puzzel from "./img/puzzel.jpg";

interface EndOfTheGameResultsScreenProps {
    changePage: (page: pages) => void;
}

export class EndOfTheGameResults extends React.Component<EndOfTheGameResultsScreenProps> {
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

                <div className="contents">
                    <img className="hands" src={hands} />
                    <h2>YOU ARE NOW AN ALLY!</h2>
                    <p>Congratulations! You have shown the empathy and understanding
                    it takes to be a mental health ally.
                         Here is an exclusive Microsoft Teams background you can download to show your accomplishment.</p>
                    <br></br>
                    <img src={puzzel} />
                    <br></br>
                    <button className="downloadButton">Download</button>
                    <br></br><br></br>
                    <button onClick={(e) => this.props.changePage(pages.EducationHomePage)} className="ContinueAllyshipButton">Continue your allyship</button>
                    <br></br><br></br>
                </div>
            </div>
        );
    }
}
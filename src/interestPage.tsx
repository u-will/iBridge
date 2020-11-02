import React from "react";
import { pages } from "./App";
import logo from "./img/NaviBridgeLogo.jpg";
import "./NavBar.css";
import "./interestPage.css";

interface InterestPageScreenProps {
  changePage: (page: pages) => void;
}

export class InterestPage extends React.Component<InterestPageScreenProps> {
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
        <div className="InterestGeneral">
        <br></br>
        <p className="UsernameGreeting">Hello, Vanessa</p>
        <br></br>
        <h2 className="QuestionInterest">Before getting started, what area of mental health do you want to explore?</h2>
        <div className="row">
          <div className="columnInterest">
            <img className="profile-img" height="85%" width="85%" alt="girl with anxiety" src="https://www2.deloitte.com/content/dam/insights/us/articles/ca22901_blueprint-for-workplace-mental-health/images/CA22901_banner.png/_jcr_content/renditions/cq5dam.web.1440.660.jpeg"></img>
            <div className="centerMe">
            <br></br>
              <button className="button-default-interest" onClick={(e) => this.props.changePage(pages.HomePage)}>Mental Wellness at Work</button>
            </div>
          </div>

          <div className="columnInterest">
            <img className="profile-img" height="85%" width="85%" alt="girl with anxiety" src="https://images.agoramedia.com/everydayhealth/gcms/Depression-Symptoms-722x406.jpg"></img>
            <div className="centerMe">
            <br></br>
              <button className="button-default-interest">Loneliness</button>
            </div>
          </div>

          <div className="columnInterest">
            <img className="profile-img" height="85%" width="85%" alt="girl with anxiety" src="https://www.cedars-sinai.org/content/dam/cedars-sinai/blog/2019/07/common-physical-symptoms-of-hidden-stress.jpg"></img>
            <div className="centerMe">
            <br></br>
              <button className="button-default-interest">Stress Management</button>
            </div>
          </div>

          <div className="columnInterest">
            <img className="profile-img" height="85%" width="85%" alt="girl with anxiety" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/anxiety-main-1576255998.jpg?crop=0.503xw:1.00xh;0.247xw,0&resize=980:*"></img>
            <div className="centerMe">
              <br></br>
              <button className="button-default-interest">Anxiety</button>
            </div>
          </div>
        </div>
        </div>

      </div>
    );
  }
}
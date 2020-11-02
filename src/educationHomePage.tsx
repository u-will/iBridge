import React from "react";
import { pages } from "./App";
import logo from "./img/NaviBridgeLogo.jpg"
import "./NavBar.css";
import "./educationHomePage.css" ;
import SubmitPost from './SubmitPost';
import "./educationHomePage.css";
import podcastLogo from "podcastIcon2.png";


interface EducationHomePageScreenProps {
  changePage: (page: pages) => void;
}
export class EducationHomePage extends React.Component<EducationHomePageScreenProps> {

  render() {


    return (
      <div className="educationPageLayout">

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


        <h1>Education Home Page </h1>

        <div className="searchContainer">
          <input type="text" placeholder="Search.." className="search"></input>
        </div>
        <button onClick={(e) => this.props.changePage(pages.HomePage)}>Submit a Post</button>

        <div className="educationPageBody">
            <div className="educationPodcastIcon" >
              <img onClick={(e) => this.props.changePage(pages.PodcastsPage)} src="/education/podcast.png" alt=""></img>
              <h1 onClick={(e) => this.props.changePage(pages.PodcastsPage)}>Podcasts</h1>
            </div>
            

            <div className="educationVideoIcon">
              <img onClick={(e) => this.props.changePage(pages.VideosPage)}src="/education/video.png" alt=""></img>
              <h1 onClick={(e) => this.props.changePage(pages.VideosPage)}>Videos</h1>
            </div>
            


            <div className="educationWriteIcon">
              <img onClick={(e) => this.props.changePage(pages.UserStoriesPage)} src="/education/paper.png" alt=""></img>
              <h1 onClick={(e) => this.props.changePage(pages.UserStoriesPage)}>User Stories</h1>
            </div>
            
        </div>
        
        
      </div>
    );
  }

}
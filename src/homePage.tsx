import React from "react";
import { pages } from "./App";
import "./NavBar.css";
import "./homePage.css";
import logo from "./img/NaviBridgeLogo.jpg";
import Counter from "./counter";
import SubmitPost from "./SubmitPost";

interface HomePageScreenProps {
  changePage: (page: pages) => void;
}

interface LikesState{
  count:number
}

export class HomePage extends React.Component<HomePageScreenProps, LikesState> {

  constructor(props:HomePageScreenProps){ 
    super(props)
    this.state = {count:0} 
  }

  render() {
    return (


      <div className="homePageLayout">
        
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

          <div className="homePageBody">

              <div className="userGreeting">
                <p>Hello, Vanessa</p>
              </div>

              <div className="didYouKnow">
                <br></br>
                <p>Did you know...</p>
                <h2> 1 in 5 U.S. adults experience mental illness each year</h2>
                <br></br>
              </div>

              <div className="gameSection">
                <div className="gameLogo">
                  <img onClick={()=>this.increment()} src="Education/gameLogo.png" alt=""></img>
                </div>
                <div className="gameText">
                  <h3>Breaking stigmas, building bridges</h3>
                  <p>Come play our iBridge game to effectively learn how to become an ally for breaking mental health stigmas. Play, learn, build communites and collect bridges!</p>
                  <button onClick={(e) => this.props.changePage(pages.GamePageOne1)}><span>PLAY NOW</span></button>
                </div>
              </div>

              <div className="additionalResources">
                
                <div className="education" >
                  <br></br>
                  <h2>Education</h2>
                  <p>Learn more about mental health in the workplace by listening to podcasts, watching videos, and reading user stories.</p>
                  <button onClick={(e) => this.props.changePage(pages.EducationHomePage)}>Education</button>
                </div>

                <div className="resources">
                  <br></br>
                  <h2>Resources</h2>
                  <p>Get information on your company's mental health support systems, how to have inclusive conversations, and more.</p>

                  <button onClick={(e) => this.props.changePage(pages.EducationHomePage)}>Resources</button>
                </div>

                <div className="wellnessToDo">
                  <br></br>
                  <h2>Wellness To-Do</h2>
                  <p>Keep yourself accountable by creating actionable solutions with your to-do list. Add tasks to incorporate into your daily life. </p>
                  <button onClick={(e) => this.props.changePage(pages.ToDoPage)}>Wellness To-Do</button>
                </div>

              </div>

              <div className="bottomSectionHomepage">

                <div className="recommended">

                  <div className="one">
                    <img className="podcastLogo" src="podcasts/imgOne.png" alt=""></img>
                    <audio controls>
                      <source src="podcasts/podcastOne.mp3" type="" />
                    </audio> <br></br>
                    <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
                    <p>Drums, Depression and a Dog, with Kristina Schiano</p> <br></br>
                    <Counter onClick={() => this.increment()} count={this.state.count} />
                  </div>

                  <div className="two">
                    <video onClick={(e) => window.open("https://www.ted.com/talks/tom_oxley_workplace_mental_health_all_you_need_to_know_for_now/up-next ")}> 
                      <source src="Videos/workPlaceMentalHealth.mp4#t=5" /> 
                    </video>
                    <p onClick={(e) => window.open("https://www.ted.com/talks/tom_oxley_workplace_mental_health_all_you_need_to_know_for_now/up-next ")}>Workplace Mental Health| Tom Oxley | TEDxNorwhichED</p><br></br>
                    <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
                    <Counter  onClick={()=>this.increment()}  count={this.state.count} />
                  </div>
                </div>
                <div className="submitPost"><SubmitPost name="Submit a Post"/></div>

              </div>

          </div>


      </div>
    );
  }

  private increment = () => {
    this.setState(
      state => ({
        count: this.state.count+1
      })
    );
 };

}

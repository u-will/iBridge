import React from "react";
import { pages } from "./App";
import "./userStoriesPage.css";
import Counter from "./counter";
import logo from "./img/NaviBridgeLogo.jpg";


interface UserStoriesPageScreenProps {
  changePage: (page: pages) => void;
}

interface LikesState{
  count:number
}

export class UserStoriesPage extends React.Component<UserStoriesPageScreenProps, LikesState> {
  
  constructor(props:UserStoriesPageScreenProps){ 
    super(props)
    this.state = {count:0} 
  }
  render() {
    return (
      <div className="userStoriesPageLayout">
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

        <div className="userStoriesPageBody">
          <div className="searchContainer">
            <input type="text" placeholder="Search.." className="search"></input>
          </div>
          <button onClick={(e) => this.props.changePage(pages.HomePage)}>Submit a Post</button>
          <h1>User Stories</h1>



          <div className="container">
            <img className="userStoriesLogo" src="userStories/imgOne.png" alt=""></img>
            <p onClick={(e) => window.open("https://www.kevinmd.com/blog/2015/06/a-doctor-shares-his-story-about-overcoming-mental-illness.html ")}>A doctor shares his story about overcoming mental illness</p><br></br>
            <h1>"...most patients, including myself, have diagnosed themselves as hopeless more than once."</h1>
            <h1 className="about">MARK VONNEGUT, MD | PHYSICIAN | JUNE 19, 2015</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img>
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <img className="userStoriesLogo" src="userStories/imgTwo.png" alt=""></img>
            <p onClick={(e) => window.open("https://www.director.co.uk/a-personal-story-about-mental-health-at-work/")}>A personal story about mental health at work</p><br></br>
            <h1>"...the simple fact is that you can’t talk about your mental health as openly as you can about your physical health."</h1>
            <h1 className="about"> Marc Caulfield | CEO of Demolish the Wall | September 17, 2018  </h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <img className="userStoriesLogo" src="userStories/imgThree.png" alt=""></img>
            <p onClick={(e) => window.open("https://www.time-to-change.org.uk/blog/my-managers-response-made-huge-difference-to-my-mental-health")}>My manager's response made a huge difference to my mental health</p><br></br>
            <h1>"They asked me what they could do to help. I just asked them to listen and not to judge or treat me like anyone else."</h1>
            <h1 className="about">Lauren | July 22, 2020</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <img className="userStoriesLogo" src="userStories/imgFour.png" alt=""></img>
            <p onClick={(e) => window.open("https://medium.com/apxberlin/apxmentalmining-addressing-mental-health-in-the-workplace-286eabd56972")}>Addressing Mental Health in the Workplace</p><br></br>
            <h1>"...because no one is openly speaking about it and I don’t understand why, maybe it’s fear of losing respect or credibility - but I would to love to see this change."</h1>
            <h1 className="about">Yannick Selinger | Feb 19, 2019</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <img className="userStoriesLogo" src="userStories/imgFive.png" alt=""></img>
            <p onClick={(e) => window.open("http://www.massmed.org/Physician_Health_Services/Helping_Yourself_and_Others/Success_Story__A_Personal_Story_of_Mental_Illness/#.XyNcS5NKidY")}>Success Story: A Personal Story of Mental Illness
</p><br></br>
            <h1>"I knew that many people — even some in the health profession — regarded depression as a character flaw rather than a true illness."</h1>
            <h1 className="about"> David Myer | August 14, 2019</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <img className="userStoriesLogo" src="userStories/imgSix.png" alt=""></img>
            <p onClick={(e) => window.open("https://www.statnews.com/2017/05/31/mental-health-medicine/")}>It is time to recognize mental health as essential to physical health</p><br></br>
            <h1>"The treatment of mental illness has long been held back by the sense that disorders ... somehow lack legitimacy and reflect individual weakness."</h1>
            <h1 className="about"> John V. Campo | MD, Wexner Medical Center </h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <img className="userStoriesLogo" src="userStories/imgSeven.png" alt=""></img>
            <p onClick={(e) => window.open("https://www.mayoclinic.org/diseases-conditions/mental-illness/in-depth/mental-health/art-20046477")}>Mental health: Overcoming the stigma of mental illness</p><br></br>
            <h1>"... it may be unintentional or subtle, such as someone avoiding you because the person assumes you could be unstable due to your mental illness."</h1>
            <h1 className="about">By Mayo Clinic Staff | 24 MAY 2017</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
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
import React from "react";
import { pages } from "./App";
import logo from "./img/NaviBridgeLogo.jpg";
import "./videosPage.css";
import Counter from "./counter";

interface VideosPageScreenProps {
  changePage: (page: pages) => void;
}

interface LikesState{
  count:number
}

export class VideosPage extends React.Component<VideosPageScreenProps, LikesState> {

  constructor(props:VideosPageScreenProps){ 
    super(props)
    this.state = {count:0} 
  }
  render() {
    return (

      <div className="videosPageLayout">
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

        <div className="videosPageBody">
          <div className="searchContainer">
            <input type="text" placeholder="Search.." className="search"></input>
          </div>
          <br>
          </br>
          <button onClick={(e) => this.props.changePage(pages.HomePage)}>Submit a Post</button>
          <br>
          </br>
          <h1>Videos</h1>



          <div className="container">
            <video onClick={(e) => window.open("https://www.youtube.com/watch?time_continue=84&v=6THT9Wgnsl0&feature=emb_title ")}> 
              <source src="Videos/Allies.mp4#t=5" /> 
            </video>
            <p onClick={(e) => window.open("https://www.youtube.com/watch?time_continue=84&v=6THT9Wgnsl0&feature=emb_title ")}>Meet Roxanne and James: Mental Health Allies</p><br></br>
            <h1>In honor of World Mental Health Day, Roxanne Chandler and James Poston share why it's okay to talk about mental health at work and the important role that allies play. Learn more: </h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img>
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <video onClick={(e) => window.open("https://www.youtube.com/watch?v=BY62qggCoic")}> 
              <source src="Videos/Complex.mp4#t=10" /> 
            </video>
            <p onClick={(e) => window.open("https://www.youtube.com/watch?v=BY62qggCoic")}>Complex mental health in the workplace</p><br></br>
            <h1>Eliza Oakley, Mindful Employer Manager, discusses three steps for employers to take to help them manage complex mental health in the workplace.</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <video onClick={(e) => window.open("https://www.ted.com/talks/heather_sarkis_stop_the_stigma_why_it_s_important_to_talk_about_mental_health/up-next ")}> 
              <source src="Videos/stopTheStigma.mp4#t=15" /> 
            </video>
            <p onClick={(e) => window.open("https://www.ted.com/talks/heather_sarkis_stop_the_stigma_why_it_s_important_to_talk_about_mental_health/up-next ")}>Stop the Stigma: Talking about Mental Health | Heather Sarkis | TEDxGainesville</p><br></br>
            <h1>Heather shines an understanding light in the dark "stigma" of mental health. She provides a unique viewpoint and embraces the immediate need for mental health care. </h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <video onClick={(e) => window.open("https://www.youtube.com/watch?v=YK56KAfMTJo ")}> 
              <source src="Videos/stressAllies.mp4#t=20" /> 
            </video>
            <p onClick={(e) => window.open("https://www.youtube.com/watch?v=YK56KAfMTJo ")}>Accenture's Mental Health Allies on handling stress</p><br></br>
            <h1>In recognition of Mental Health Awareness Week we asked some of our Mental Health Allies how they handle stress. This is what they had to say…</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <video onClick={(e) => window.open("https://www.youtube.com/watch?v=Ji71T7QD_yU ")}> 
              <source src="Videos/talkAboutIt.mp4#t=5" /> 
            </video>
            <p onClick={(e) => window.open("https://www.youtube.com/watch?v=Ji71T7QD_yU")}>It’s Time To Talk About Mental Health At Work</p><br></br>
            <h1>Talking about mental health at work can make you happier and healthier. If you’re worried about a colleague, follow these mental health first aid tips to start a conversation…</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <video onClick={(e) => window.open("https://www.youtube.com/watch?v=G0zJGDokyWQ ")}> 
              <source src="Videos/whatIsMentalHealth.mp4#t=5" /> 
            </video>
            <p onClick={(e) => window.open("https://www.youtube.com/watch?v=G0zJGDokyWQ ")}>What is Mental Health?</p><br></br>
            <h1> Mental Health at Work can help managers by training them to start the conversation with a common language and literacy around mental health.</h1>
            <img onClick={()=>this.increment()} src="Videos/likeIcon.png" alt=""></img> 
            <Counter  onClick={()=>this.increment()}  count={this.state.count} />
          </div>



          <div className="container">
            <video onClick={(e) => window.open("https://www.ted.com/talks/tom_oxley_workplace_mental_health_all_you_need_to_know_for_now/up-next ")}> 
              <source src="Videos/workPlaceMentalHealth.mp4#t=5" /> 
            </video>
            <p onClick={(e) => window.open("https://www.ted.com/talks/tom_oxley_workplace_mental_health_all_you_need_to_know_for_now/up-next ")}>Workplace Mental Health| Tom Oxley | TEDxNorwhichED</p><br></br>
            <h1>Is Mental Health important​ in the workplace?  Tom explores all things related to workplace mental health, including mental health in school workplaces,  in this insightful video.</h1>
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

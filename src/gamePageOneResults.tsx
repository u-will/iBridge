import React from "react";
import { pages } from "./App";
import ResultsBox from './ResultsBox';
import logo from "./img/NaviBridgeLogo.jpg";
import "./gamePageOneResults.css";
import Counter from "./counter";

interface GamePageOneResultsScreenProps {
  changePage: (page: pages) => void;
}

interface LikesState{
  count:number
}

export class GamePageOneResults extends React.Component<GamePageOneResultsScreenProps, LikesState> {

  constructor(props:GamePageOneResultsScreenProps){ 
    super(props)
    this.state = {count:0} 
  }

  render() {
    return (

      <div className="pageLayout">
          <div className="NavBar">
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

          <div className="pageBody">

            <div className="resultsSection">
              <h1>Level 1: Demystifying Stigmas</h1>

            </div>
              <ResultsBox name="Your Results" score="4" questionNumber="5" incorrectStatement="A mental illness makes one less able to do a job.    "
                correctAnswer=" Correct Answer: Myth"
                answerRecap="   Mental disorder does not interfere with all capacities, and can sometimes improve others. There is plenty of evidence that, given the right supports, people with mental illness can be successful at work. Conversely, individuals do not have to have a mental illness to lack the mental capacity to do a job.">

              </ResultsBox>
            <div className="keepLearning">
              <h2>Keep Learning: </h2>
              <p>Watch these two educational resources to continue learning about mental health related stigmas in the workplace.</p>
            </div>

            <div className="container">
              <img className="podcastLogo" src="podcasts/imgFour.png" alt=""></img>
              <audio controls>
                <source src="podcasts/podcastFour.mp3" type="" />
              </audio> <br></br>
              <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
              <p>How to Be an Ally - Mental Health at work</p>
              <Counter onClick={() => this.increment()} count={this.state.count} />
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

            <div className="bottomSection">
              <h2>Want to continue playing?</h2>
              <button className="buttonTwo" onClick={(e) => this.props.changePage(pages.GamePageTwo)}>NEXT LEVEL</button>
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
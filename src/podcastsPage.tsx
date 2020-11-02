import React from "react";
import { pages } from "./App";
import logo from "./img/NaviBridgeLogo.jpg";
import "./podcastsPage.css";
import Counter from "./counter";



interface PodcastsPageScreenProps {
  changePage: (page: pages) => void;
}

interface LikesState {
  count: number
}

export class PodcastsPage extends React.Component<PodcastsPageScreenProps, LikesState> {

  constructor(props: PodcastsPageScreenProps) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (

      <div className="podcastsPageLayout">
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

          <div className="podcastsPageBody">
            <div className="searchContainer">
              <input type="text" placeholder="Search.." className="search"></input>
            </div>
            <button onClick={(e) => this.props.changePage(pages.HomePage)}>Submit a Post</button>
            <h1>Podcasts</h1>

            <div className="container">
              <img className="podcastLogo" src="podcasts/imgOne.png" alt=""></img>
              <audio controls>
                <source src="podcasts/podcastOne.mp3" type="" />
              </audio> <br></br>
              <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
              <p>Drums, Depression and a Dog, with Kristina Schiano</p> <br></br>
              <Counter onClick={() => this.increment()} count={this.state.count} />
            </div>



            <div className="container">
              <img className="podcastLogo" src="podcasts/imgTwo.png" alt=""></img>
              <audio controls>
                <source src="podcasts/podcastTwo.mp3" type="" />
              </audio> <br></br>
              <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
              <p>Ian Tucker - Mental Health and Emotion in the Digital Age</p>
              <Counter onClick={() => this.increment()} count={this.state.count} />
            </div>



            <div className="container">
              <img className="podcastLogo" src="podcasts/imgThree.png" alt=""></img>
              <audio controls>
                <source src="podcasts/podcastThree.mp3" type="" />
              </audio> <br></br>
              <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
              <p>Strange But United Times - Covid with Dave Chawner</p>
              <Counter onClick={() => this.increment()} count={this.state.count} />
            </div>



            <div className="container">
              <img className="podcastLogo" src="podcasts/imgFour.png" alt=""></img>
              <audio controls>
                <source src="podcasts/podcastFour.mp3" type="" />
              </audio> <br></br>
              <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
              <p>How to Be an Ally - Mental Health</p>
              <Counter onClick={() => this.increment()} count={this.state.count} />
            </div>



            <div className="container">
              <img className="podcastLogo" src="podcasts/imgFive.png" alt=""></img>
              <audio controls>
                <source src="podcasts/podcastFive.mp3" type="" />
              </audio> <br></br>
              <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
              <p>Assertive Communication</p>
              <Counter onClick={() => this.increment()} count={this.state.count} />
            </div>



            <div className="container">
              <img className="podcastLogo" src="podcasts/imgSix.png" alt=""></img>
              <audio controls>
                <source src="podcasts/podcastSix.mp3" type="" />
              </audio> <br></br>
              <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
              <p>Bulimia - Look into Her Greedy Eyes and Destroy Her!</p>
              <Counter onClick={() => this.increment()} count={this.state.count} />
            </div>



            <div className="container">
              <img className="podcastLogo" src="podcasts/imgSeven.png" alt=""></img>
              <audio controls>
                <source src="podcasts/podcastSeven.mp3" type="" />
              </audio> <br></br>
              <img onClick={() => this.increment()} className="likeButton" src="Videos/likeIcon.png" alt=""></img>
              <p>The Dark Place - Laura Thompson</p>
              <Counter onClick={() => this.increment()} count={this.state.count} />
            </div>

          </div>


        </div>
      </div>
    );
  }

  private increment = () => {
    this.setState(
      state => ({
        count: this.state.count + 1
      })
    );
  };
}

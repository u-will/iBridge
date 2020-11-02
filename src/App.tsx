import React from "react";
import "./App.css";
import { VideosPage } from "./videosPage";
import { UserStoriesPage } from "./userStoriesPage";
import { SignInPage } from "./signInPage";
import { InterestPage } from "./interestPage";
import { HomePage } from "./homePage";
import { GamePageTwoResults } from "./gamePageTwoResults";
import { GamePageTwo } from "./gamePageTwo";
import { GamePageOneResults } from "./gamePageOneResults";
import { GamePageOne1 } from "./GamePageOne1";
import { GamePageOne2 } from "./GamePageOne2";
import { GamePageOne3 } from "./GamePageOne3";
import { GamePageOne4 } from "./GamePageOne4";
import { GamePageOne5 } from "./GamePageOne5";
import { EducationHomePage } from "./educationHomePage";
import { PodcastsPage } from "./podcastsPage";
import { ToDoPage } from "./toDoPage";
import { SettingPage } from "./SettingPage";
import { GamePageTwoSecond } from "./gamePageTwoSecond";
import { GamePageTwoThird } from "./gamePageTwoThird";
import { GamePageTwoFourth } from "./gamePageTwoFourth";
import { EndOfTheGameResults } from "./endOfTheGameResults";


export enum pages {
  VideosPage,
  UserStoriesPage,
  SignInPage,
  PodcastsPage,
  InterestPage,
  HomePage,
  GamePageTwoResults,
  GamePageTwo,
  GamePageOneResults,
  GamePageOne1,
  GamePageOne2,
  GamePageOne3,
  GamePageOne4,
  GamePageOne5,
  EducationHomePage,
  ToDoPage,
  SettingPage,
  GamePageTwoSecond,
  GamePageTwoThird,
  GamePageTwoFourth,
  EndOfTheGameResults,
}

interface AppState {
  currentPage: pages;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: pages.SignInPage};
  }
  
  render() {
    return <div className="App">{this.getCurrentScreen()}</div>;
  }


  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.VideosPage:
        return <VideosPage changePage={this.changeScreen} />;
      case pages.UserStoriesPage:
        return <UserStoriesPage changePage={this.changeScreen} />;
      case pages.SignInPage:
        return <SignInPage changePage={this.changeScreen} />;
      case pages.PodcastsPage:
        return <PodcastsPage changePage={this.changeScreen} />;
      case pages.InterestPage:
        return <InterestPage changePage={this.changeScreen} />;
      case pages.HomePage:
        return <HomePage changePage={this.changeScreen} />;
      case pages.GamePageTwoResults:
        return <GamePageTwoResults changePage={this.changeScreen} />;
      case pages.GamePageTwo:
        return <GamePageTwo changePage={this.changeScreen} />;
      case pages.GamePageOneResults:
        return <GamePageOneResults changePage={this.changeScreen} />;
      case pages.GamePageOne1:
        return <GamePageOne1 changePage={this.changeScreen} />;
      case pages.GamePageOne2:
        return <GamePageOne2 changePage={this.changeScreen} />;
      case pages.GamePageOne3:
        return <GamePageOne3 changePage={this.changeScreen} />;
      case pages.GamePageOne4:
        return <GamePageOne4 changePage={this.changeScreen} />;
      case pages.GamePageOne5:
        return <GamePageOne5 changePage={this.changeScreen} />;
      case pages.EducationHomePage:
        return <EducationHomePage changePage={this.changeScreen} />;
      case pages.ToDoPage:
        return <ToDoPage changePage={this.changeScreen} />;
      case pages.SettingPage:
        return <SettingPage changePage={this.changeScreen} />;
      case pages.GamePageTwoSecond:
        return <GamePageTwoSecond changePage={this.changeScreen} />;
      case pages.GamePageTwoThird:
        return <GamePageTwoThird changePage={this.changeScreen} />;
      case pages.GamePageTwoFourth:
        return <GamePageTwoFourth changePage={this.changeScreen} />;
      case pages.EndOfTheGameResults:
        return <EndOfTheGameResults changePage={this.changeScreen} />;

      default:
        return <div>ERROR</div>;
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage
    }));
  };
}

export default App;



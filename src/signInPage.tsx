import React from "react";
import { pages } from "./App";
import logo from "./img/iBridgeLogo.png"
import "./signInPage.css";

interface SignInPageScreenProps {
  changePage: (page: pages) => void;
}

export class SignInPage extends React.Component<SignInPageScreenProps> {
  render() {
    return (
      <div className="signInPageLayout">
        <div className="signInPageHeader">
          <h1>iBridge</h1>
          <form action="/action_page.php">
            <br></br>
            <input type="text" placeholder="Email or Number" className="username"></input>
            <input type="text" placeholder="Password" className="psw"></input>
            <button onClick={(e) => this.props.changePage(pages.HomePage)} type="submit">Login</button>
          </form>
        </div>
        
        <div className="signInPageBody">
            <div className="appDescription">
              <img src= {logo} alt=""></img>
            </div>

            <div className="loginInfo">
              <br></br>
              <h1>Create an account</h1>
              <br></br>
              <label>First Name: <input type="text" id="firstName"></input></label>
              <br></br>
              <label>Last Name: <input type="text" id="lastName"></input></label>     
              <br></br>      
              <label>Email: <input type="text" id="email"></input></label> 
              <br></br>       
              <label>Password: <input type="text" id="password"></input></label>
              <br></br><br></br>
              <button className="signUpButton" onClick={(e) => this.props.changePage(pages.InterestPage)}>Sign Up</button>
            </div> 
        </div>
      </div>
    );
  }
}

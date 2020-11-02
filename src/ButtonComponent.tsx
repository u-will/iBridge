import React, {Component} from 'react';
import './ButtonComponent.css';

interface ButtonStateProps{
    buttonInput: string,
}

class ButtonState extends React.Component<ButtonStateProps, {button:boolean}> {
    constructor(props: any){
        super(props);
        this.state = {button:true}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            button:!this.state.button
        })
    }
    render() { 
        return ( 
            <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>{this.props.buttonInput}</button>
        )
    }
 }

 export default ButtonState
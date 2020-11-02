import React from 'react'

interface CounterProps{
    count: number
    onClick: any
}

class Counter extends React.Component<CounterProps> {

  componentWillMount(){ 
  }

  render() {
    return (
      <div className="Videos/likeIcon.png" onClick={this.props.onClick}>
         {this.props.count}
      </div>
    );
  }
}

export default Counter
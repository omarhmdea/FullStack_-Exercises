import React, { Component } from 'react';

class Conversation extends Component {

  updatStateToNull = () => {
    this.props.updatStateToNull()
  }

  render() {
    return (
      <div className='sender'>
        {this.props.convo.convo.map(m => {
          return (
            m.sender === "self" ?
              <div>Me: {m.text}</div> :
              <div>{this.props.sender}: {m.text}</div>
          )
        })}
        <button className='back' onClick={this.updatStateToNull} >back</button>
      </div>
    );
  }
}

export default Conversation;

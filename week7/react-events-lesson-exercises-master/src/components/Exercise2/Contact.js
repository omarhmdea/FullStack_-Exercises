import React, { Component } from 'react';

class Contact extends Component {

  displayConvo  = () =>{
    this.props.displayConvo(this.props.name)
  }
  render() {
    return (
      <div onClick={this.displayConvo}>
        {this.props.name}
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;

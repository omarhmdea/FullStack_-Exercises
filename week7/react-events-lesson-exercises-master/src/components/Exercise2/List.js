import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  //should recieve the prop "contact"
  displayConvo = (name) =>{
    this.props.displayConvo(name)

  }
  render() {
    return (
      <div >
        {this.props.contacts.map(n => <Contact name={n} displayConvo={this.props.displayConvo} />)}
      </div>
    );
  }
}

export default List;

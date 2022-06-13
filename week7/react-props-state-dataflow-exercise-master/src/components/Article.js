import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>{this.props.color} {this.props.type}</div>
    )

  }
}

export default Article
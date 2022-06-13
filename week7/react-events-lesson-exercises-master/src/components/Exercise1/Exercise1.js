import React, { Component } from 'react';

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
      currentImg: 0
    }
  }
  shiftImageBack = () => {
    if (this.state.currentImg > 0) {
      this.setState({
        currentImg: this.state.currentImg - 1
      })
    }
    console.log(this.state.currentImg)

  }
  shiftImageForward = () => {
    if (this.state.currentImg < this.state.images.length - 1) {
      this.setState({
        currentImg: this.state.currentImg + 1
      })
    }

  }

  render() {
    return (
      <div >
        <button onClick={this.shiftImageBack}>Previous</button>
        <img src={this.state.images[this.state.currentImg]} />
        <button onClick={this.shiftImageForward}>Next</button>
      </div>

    );
  }
}

export default Exercise1;

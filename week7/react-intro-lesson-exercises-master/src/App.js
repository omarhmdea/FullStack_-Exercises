import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return <h1>Hello World</h1>
  }

  getMorningGreeting() {
    return <div>Morning</div>
  }

  getEveningGreeting() {
    return <div>Evening</div>
  }

  showCompany(name, revenue) {
    return <div id={name}>{name} makes {revenue} every year</div>
  }

  getClassName(temperature) {
    if (temperature < 15)
      return <div id="weatherBox" class="freezing"></div>

    if (temperature >= 15 && temperature < 30)
      return <div id="weatherBox" class="fair"></div>

    return <div id="weatherBox" class="hell-scape"></div>
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() < 12 ? this.getMorningGreeting() : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>some text</p>
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {
              companies.map(c => this.showCompany(c.name, c.revenue))
            }
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(169)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;

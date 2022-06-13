import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        let arryOfSpam = []
        for (let index = 0; index < 500; index++) {
            arryOfSpam.push(<Spam />)
            
        }
        return (
            <div> {arryOfSpam}</div>
        )
    }
}

export default Spamalot


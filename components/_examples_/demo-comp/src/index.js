import React, { Component } from 'react';
import './index.css'

class DemoComp extends Component {

  // componentDidMount(){
  //   console.log("Component mounted")
  // }

  render() {

    let { customText } = this.props

    if(!customText){
      customText = "Transpiled On-The-Fly"
    }

    return (
      <div className="demo-comp">
        <h3>DemoComp</h3>
        <p><i>{customText}</i></p>
      </div>
    );
  }
}

export default DemoComp;

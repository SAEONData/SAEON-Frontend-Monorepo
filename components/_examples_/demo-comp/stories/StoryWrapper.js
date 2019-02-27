import React, { Component } from 'react';

const style = {
  border: "1px solid gainsboro",
  padding: "30px 40px 30px 40px",
  backgroundColor: "whitesmoke"
}

class StoryWrapper extends Component {

  render() {

    let { onClick } = this.props

    return (
      <div onClick={onClick ? onClick : null} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default StoryWrapper;

import React, { Component } from 'react';

import DemoComp from '@examples/demo-comp';

class Demo extends Component {
  render() {
    return (
      <>
        <div onClick={() => { window.location.hash = "/" }}>
          <DemoComp />
        </div>
      </>
    );
  }
}

export default Demo;

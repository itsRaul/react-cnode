import React, { Component } from 'react';
import  RouterIndex from './router/index';
import Head from './component/Head';
import Foot from './component/Foot';
import './style/base.css';

class App extends Component {
  render() {
    return (
      <div className="pageWrap">
          <Head/>
          <div className="main">
            <RouterIndex/>
          </div>
          <Foot/>     
      </div>
    )
        
  }
}

export default App;

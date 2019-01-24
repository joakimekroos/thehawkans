import React, { Component } from 'react';

import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/footer';

class App extends Component {
  render (){
    return (
      <div className="thehawkans">
        <Menu />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;

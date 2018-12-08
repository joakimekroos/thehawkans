import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './content/Home';
import Band from './content/Band';
import People from './content/People';
import Music from './content/Music';
import Contact from './content/Contact';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/band" component={Band} />
      <Route path="/people" component={People} />
      <Route path="/music" component={Music} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}

export default Content;

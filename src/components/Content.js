import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './content/Home';
import Band from './content/Band';
import Music from './content/Music';
import Contact from './content/Contact';
import NotFound from './content/NotFound';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/band" component={Band} />
      <Route path="/music" component={Music} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Content;

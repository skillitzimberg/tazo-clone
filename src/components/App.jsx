import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import Home from './Home/Home';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import {link} from 'react-router';

class HomePage extends React.component {
  render() {
    return (
      <div className="jumbottron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
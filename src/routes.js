import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.react';
import HomePage from './components/home/HomePage.react';
import AboutPage from './components/about/AboutPage.react';
import CoursesPage from './components/course/CoursesPage.react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);

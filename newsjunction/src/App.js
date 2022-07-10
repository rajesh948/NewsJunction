import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component{
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
      <Navbar title="NewsJunction" />
      <Routes>
  
          <Route exact path="/" element={<News key="general" api={this.apikey} category="general" pageSize={10}/>}/>
          <Route exact path="/business" element={<News  key="business" api={this.apikey} category="business" pageSize={10} />}/>
          <Route exact path="/entertainment" element={<News  key="entertainment" api={this.apikey} category="entertainment" pageSize={10} />}/>
          <Route exact path="/health" element={<News  key="health" api={this.apikey} category="health" pageSize={10} />}/>
          <Route exact path="/science" element={<News  key="science" api={this.apikey} category="science" pageSize={10} />}/>
          <Route exact path="/sports" element={<News  key="sports" api={this.apikey} category="sports" pageSize={10} />}/>
          <Route exact path="/technology" element={<News  key="technology" api={this.apikey} category="technology" pageSize={10} />}/>
          </Routes>
      </Router>
      </div>
    
    )
  }
}

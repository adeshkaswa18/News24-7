import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class hii extends Component {
  
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <Router>
      <div>
       <Navbar />
       <Routes>
          <Route path="/" element = {<News setProgress={this.setProgress} key='general' pageSize={20} category={"general"} country={'in'}  /> } />
          <Route path="/business" element = {<News setProgress={this.setProgress} key='business' pageSize={20} category={"business"} country={'in'}  /> } />
          <Route path="/entertainment" element = {<News setProgress={this.setProgress} key='entertainment' pageSize={20} category={"entertainment"} country={'in'}  /> } />
          <Route path="/health" element = {<News setProgress={this.setProgress} key='health' pageSize={20} category={"health"} country={'in'}  /> } />
          <Route path="/science" element = {<News setProgress={this.setProgress} key='science' pageSize={20} category={"science"} country={'in'}  /> } />
          <Route path="/sports" element = {<News setProgress={this.setProgress} key='sports' pageSize={20} category={"sports"} country={'in'}  /> } />
          <Route path="/technology" element = {<News setProgress={this.setProgress} key='technology' pageSize={20} category={"technology"} country={'in'}  /> } />
          
        </Routes>
      </div>
      </Router>
      
    )
  }
}












// API key
// fe2b574748bc405ba66b55197947fdf7
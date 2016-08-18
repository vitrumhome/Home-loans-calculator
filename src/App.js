import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
var App = React.createClass({displayName: 'App',
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value });
  },
  handleChange: function(e) {

    this.setState({text: (e.target.value * 100 ) });
  },
  render: function(e) {
    return (
      <div className="App">
        <div className="App-header">
          <h2>🐷🐷房贷计算器</h2>
        </div>
        <form className="commentForm">
          <input type="text" id="textInput"  value={this.state.text} />
          <input type="range" name="rangeInput" step="4" min="0" max="24" onChange={this.handleChange} />
          <input type="text" id="authorInput"  value={this.state.author} />
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange} />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
})

export default App;

import React, { Component } from 'react';
import './App.css';
import RepoNames from './components/RepoNames';


class App extends Component {
  state = {
    error: null,
    repos: null
  }

  render() {
    const { error, repos } = this.state
    return (
      <div className="App">
        { !!error && <p>{ error.message }</p> }
        {
          !!repos ? (
            <RepoNames items={ repos } />
          ) : (
            'Loading repos...'
          )
        }
      
      </div>
    );
  }
  componentDidMount() {
    fetch('https://api.github.com/users/george2kra/repos')
      .then(res => res.json())
      .then(repos => {
        this.setState({ repos })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App;

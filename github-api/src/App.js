import React, { Component } from 'react';
import './App.css';
import RepoNames from './components/RepoNames';



const names = [
              'alfredosorio',
              'ifollowedthewhiterabbit',
              'Livia-Santos',
              'Jay-Aye',
              'Chris-Robertson',
              'CharleyFarley',
              'george2kra',
              'teck7',
              'Reynolds15',
              'cjpillette',
              'vinnym342',
              'paigerichards',
              'Confidenceman02',
              'melvourne',
              'C-lockwood',
              'Samseppiol',
              'AnnSiapno',
              'vkalfieri',
              'dsaleem',
              'Csthy93',
              'madzc97'
]



class App extends Component {
  state = JSON.parse(localStorage.getItem('savedData')) || {
    error: null,
    repoName: null,
    repos: null
  }



  render() {
    const { error, repos } = this.state
    return (
      <div className="App">
        {
          names.map((name) => (
            <li>
              <a onClick={ () => this.handleClick(name) } style={{cursor: 'pointer'}}>{name}</a>
            </li>
          ))
        }
        { !!error && <p>{ error.message }</p> }
        {
          !!repos ? (
            <RepoNames items={ repos } />
          ) : (
            ''
          )
        }
      </div>
    );
  }

    handleClick = (repoName) => {      
      fetch(`https://api.github.com/users/${repoName}/repos`)
        .then(res => res.json())
        .then(repos => {
          this.setState({ repoName, repos })
        })
        .catch(error => {
          this.setState({ error })
        })
  }

  componentDidUpdate() {
    localStorage.setItem('savedData', JSON.stringify(this.state))
  }


  // componentDidMount() {
  //   fetch(`https://api.github.com/users/repos`)
  //     .then(res => res.json())
  //     .then(repos => {
  //       this.setState({ repos })
  //     })
  //     .catch(error => {
  //       this.setState({ error })
  //     })
  // }
}

export default App;

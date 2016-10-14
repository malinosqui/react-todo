import React, { Component } from 'react';
import '../containers/App.css';
import Header from '../components/navbar';
import Todo from '../components/todo';

let menuitems = [
  {
    name: 'Home',
    link: '#',
    key: 1
  }, {
    name: 'Pessoas',
    link: '#',
    key: 2
  }
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header title="React TODO" items={menuitems} />
        <Todo/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';
import { filter } from './constant';


const data = {
	filter: filter.all,
	todos: [
		{
			title: 'Read Design Patterns',
			completed: false,
		},
		{
			title: 'Watch video',
			completed: true,
		},
	],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to To-Do app</h1>
        </header>
        <div className="App-intro">
          <Todo data={data}/>
        </div>
      </div>
    );
  }
}

export default App;

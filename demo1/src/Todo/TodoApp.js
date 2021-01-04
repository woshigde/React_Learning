// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component, Fragment } from 'react';
import TodoList from './TodoList'

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items:[], text:'' };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  render() { 
    return (
      <Fragment>
        <h3>TODO</h3>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            what needs to be done
          </label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text}></input>
          <button>
            add #{this.state.items.length+1}
          </button>
        </form>
      </Fragment>
    );
  }
  handleChange(e){
    this.setState({text:e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.text.length===0){
      return;
    }
    const newItem={
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state =>({
      items: state.items.concat(newItem),
      text:''
    }));
  }
}
 
export default TodoApp ;

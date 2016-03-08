//var Footer = require('./Footer.react');
//var Header = require('./Header.react');
//var MainSection = require('./MainSection.react');
import TodoTextInput from './TodoTextInput';
import React from 'react';
import TodoStore from '../../stores/TodoStore';

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    //areAllComplete: TodoStore.areAllComplete()
  };
}

var TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  onSaveHandle: function(){
      alert('save');
  },
  /**
   * @return {object}
   */
  render: function() {
      let _todos = [];
      let allTodos = this.state.allTodos;
      for (var key in allTodos) {
          _todos.push(<li key={key}>{allTodos[key].text}</li>);
      }
  
      return (
        <div>
          <TodoTextInput onSave={this.onSaveHandle} />
          <ul>{_todos}</ul>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});

export default TodoApp;

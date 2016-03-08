import React from 'react';
import TodoActions from '../../actions/TodoActions';

let ReactPropTypes = React.PropTypes;

let ENTER_KEY_CODE = 13;

let TodoTextInput = React.createClass({

  propTypes: {
    //className: ReactPropTypes.string,
    //id: ReactPropTypes.string,
    //placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  /**
   * @return {object}
   */
  render: function() /*object*/ {
    return (
      <input
        //className={this.props.className}
        //id={this.props.id}
        //placeholder={this.props.placeholder}
        //onKeyDown={this._onKeyDown}
        //autoFocus={true}
        onBlur={this._save}
        onChange={this._onChange}        
        value={this.state.value}        
      />
    );
  },

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _save: function() {
      //this.props.onSave(this.state.value);
       TodoActions.create(this.state.value);  
        this.setState({
          value: ''
        });
  },

  /**
   * @param {object} event
   */
  _onChange: function(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  },

  /**
   * @param  {object} event
   */
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

});

export default TodoTextInput;

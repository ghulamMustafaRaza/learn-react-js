import React, { Component } from 'react';
import TodoApp from './src/components/native'

export default class fbAuthPhoneTry extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: "",
      todos: ['hello', 'world']
    };
  }
  press = () => { if(this.state.text){this.setState(prev => ({ todos: prev.todos.concat(prev.text), text: '' }))} }
  
  delete = (i) => { this.setState(prev => ({ todos: prev.todos.filter((a, ind) => i !== ind)})) }
  render() {
    return (
      <TodoApp value={this.state.text} onPress={this.press} delete={this.delete} onChangeText={a => this.setState({ text: a }) } todos={this.state.todos}/>
    );
  }
}
import Todo from './src/components/web' 
import React from 'react'
import ReactDOM from 'react-dom'

export default class TodoApp extends React.Component {
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
      <Todo value={this.state.text} onPress={this.press} delete={this.delete} onChangeText={a => this.setState({ text: a }) } todos={this.state.todos}/>
    );
  }
}


ReactDOM.render(<TodoApp/>, document.getElementById('app'))
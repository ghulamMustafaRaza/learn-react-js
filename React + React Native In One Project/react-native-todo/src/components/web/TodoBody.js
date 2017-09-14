import TodoEle from './TodoEle'
import React from 'react'


export default TodoBody = (props) => (
  <div>
    {
      props.todos.map((el, i) => (
        <TodoEle el={el} key={i} onPress={props.delete.bind(null, i)}/>
      ))
    }
  </div>
)
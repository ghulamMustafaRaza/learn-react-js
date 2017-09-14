import AddTodo from './Addtodo'
import TodoBody from './TodoBody'
import React from 'react'
import { stylesWeb as styles } from '../../config/stylesWeb'

export default (props) => (
  <div style={styles.container}>
    <AddTodo value={props.value} onPress={props.onPress} onChangeText={props.onChangeText} />
    <TodoBody todos={props.todos} delete={props.delete} />
  </div>
)
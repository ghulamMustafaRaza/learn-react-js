import TodoEle from './TodoEle'
import { View } from 'react-native'
import React from 'react'

export default TodoBody = (props) => (
  <View>
    {
      props.todos.map((el, i) => (
        <TodoEle el={el} key={i} onPress={props.delete.bind(null, i)}/>
      ))
    }
  </View>
)
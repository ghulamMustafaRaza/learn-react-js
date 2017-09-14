import AddTodo from './Addtodo'
import TodoBody from './TodoBody'
import React from 'react'
import { View } from 'react-native'
import { stylesNative as styles } from '../../config/stylesNative'

export default (props) => (
  <View style={styles.container}>
    <AddTodo value={props.value} onPress={props.onPress} onChangeText={props.onChangeText} />
    <TodoBody todos={props.todos} delete={props.delete} />
  </View>
)
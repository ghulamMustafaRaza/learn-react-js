import {
  TextInput,
  View,
  TouchableNativeFeedback,
  Text
} from 'react-native';
import { stylesNative as styles } from '../../config/stylesNative'

import React from 'react'

export default AddTodo = (props) => (
  <View style={styles.row}>
    <View style={styles.col8}>
      <TextInput onSubmitEditing={props.onPress} placeholder="Place Your Todo" onChangeText={props.onChangeText} value={props.value}/>
    </View>
    <TouchableNativeFeedback style={styles.col4} background={TouchableNativeFeedback.Ripple('#fff')} onPress={props.onPress}>
      <View style={styles.btn}>
        <Text style={{color: '#fff'}}>Add</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
)
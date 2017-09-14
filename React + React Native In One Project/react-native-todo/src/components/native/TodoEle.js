import {
  TextInput,
  View,
  TouchableNativeFeedback,
  Text
} from 'react-native';
import { stylesNative as styles } from '../../config/stylesNative'
import React from 'react'

export default TodoEle = (props) => (
  <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#aaa')}>
    <View style={[styles.row, {backgroundColor: '#eee'}]}>
      <View style={styles.col8}>
        <Text>{props.el}</Text>
      </View>
      <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('#fff')} onPress={props.onPress} style={styles.col4}>
        <View style={styles.btnDenger}>
          <Text style={{color: '#fff'}}>Delete</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  </TouchableNativeFeedback>
)

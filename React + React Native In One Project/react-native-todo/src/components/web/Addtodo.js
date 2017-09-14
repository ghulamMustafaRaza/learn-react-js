import { stylesWeb as styles } from '../../config/stylesWeb'

import React from 'react'
  // <View style={styles.row}>
  //   <View style={styles.col8}>
  //     <TextInput onSubmitEditing={props.onPress} placeholder="Place Your Todo" onChangeText={props.onChangeText} value={props.value}/>
  //   </View>
  //   <TouchableNativeFeedback style={styles.col4} background={TouchableNativeFeedback.Ripple('#fff')} onPress={props.onPress}>
  //     <View style={styles.btn}>
  //       <Text style={{color: '#fff'}}>Add</Text>
  //     </View>
  //   </TouchableNativeFeedback>
  // </View>
export default AddTodo = (props) => (
  <div style={styles.row}>
    <form onSubmit={e => {e.preventDefault(); props.onPress();}} style={{...styles.col8, display: 'flex'}}>
      <input placeholder="Your Todo" style={{flex: 1, padding: 10}} onChange={ev => props.onChangeText(ev.target.value)} value={props.value}/>
    </form>
    <span style={styles.col4} onClick={props.onPress}>
      <div style={styles.btn}>
        <span style={{color: '#fff'}}>Add</span>
      </div>
    </span>
  </div>
)
import { stylesWeb as styles } from '../../config/stylesWeb'

import React from 'react'

export default TodoEle = (props) => (
  <div>
    <div style={styles.row}>
      <div style={{...styles.col8, alignItems: 'center', backgroundColor: '#ccc', display: 'flex', borderRadius: 5 }}>
        <span>{props.el}</span>
      </div>
      <span onClick={props.onPress} style={styles.col4}>
        <div style={styles.btnDenger}>
          <span style={{color: '#fff'}}>Delete</span>
        </div>
      </span>
    </div>
  </div>
)
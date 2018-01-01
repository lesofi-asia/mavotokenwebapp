import React from 'react';
import TextField from 'material-ui/TextField';
import styles from './styles';

const CustomTextField = ({
    label,
    ...custom
  }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      {...custom}
    />
)

export default CustomTextField;
import React from 'react';
import TextField from 'material-ui/TextField';
import styles from './styles';

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      errorText={touched && error}
      {...input}
      {...custom}
    />
)

export default renderTextField;
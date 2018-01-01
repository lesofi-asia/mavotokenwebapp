import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import styles from './styles';

const renderCheckbox = ({ input, label }) => (
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange}
      labelStyle={styles.checkboxLabel}
    />
)

export default renderCheckbox;
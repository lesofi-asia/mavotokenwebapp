import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import styles from './styles';

const CustomCheckboxField = ({ value, label, onChange, style }) => (
    <Checkbox
      label={label}
      checked={value}
      onCheck={onChange}
      labelStyle={style? style : styles.checkboxLabel}
    />
)

export default CustomCheckboxField;
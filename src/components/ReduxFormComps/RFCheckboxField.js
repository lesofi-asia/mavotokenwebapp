import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import styles from '../MaterialUi/styles';

const RFCheckboxField = ({ input, label, customStyle, customLabelStyle }) => (
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange}
      labelStyle={customLabelStyle ? customLabelStyle : styles.checkboxLabel}
      style={customStyle}
    />
)

export default RFCheckboxField;
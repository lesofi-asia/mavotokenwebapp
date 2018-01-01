import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const renderRadioGroup = ({
   input, 
   ...rest 
  }) => (
    <RadioButtonGroup
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
      {...input}
      {...rest}
    />
)

export default renderRadioGroup;
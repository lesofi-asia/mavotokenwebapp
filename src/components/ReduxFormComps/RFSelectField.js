import React from 'react';
import PropTypes from 'prop-types';
import styles from '../MaterialUi/styles';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';

const RFSelectField = ({ input, label, customStyle, meta: { touched, error }, datas, codeField, descField }) => (
    <SelectField
      hintText={label}
      floatingLabelText={label}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      errorText={touched && error}
      style={customStyle}
      {...input}
      onChange={(event, index, value) => 
            input.onChange(value)
        }
      >

       { datas.length >0 ? datas.map( data => (
            <MenuItem key={data[codeField]} value={data[codeField]} primaryText={data[descField]} />
        )) : <MenuItem key={'code1'} value={''} primaryText={''} /> }

    </SelectField>  
  )

RFSelectField.propTypes = {
    codeField: PropTypes.string.isRequired,
    descField: PropTypes.string.isRequired
}

export default RFSelectField;
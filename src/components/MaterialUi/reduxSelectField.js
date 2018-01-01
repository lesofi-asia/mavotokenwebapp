import React from 'react';
import styles from './styles';
import AutoComplete from 'material-ui/AutoComplete';

const selectOnChange = (searchText,dataSource,params,input)=> {
    input.onChange(null);
}

const selectOnNewRequest= (chosenRequest,index,input,dataSourceConfig)=>{
    input.onChange(chosenRequest[dataSourceConfig.value]);
}

const reduxSelectField=({
    input,
    label,
    dataSource,
    dataSourceConfig,
    meta: { touched, error },
    fullWidth
    })=>{
    
    return (
      <AutoComplete
        hintText={label}
        floatingLabelText={label}
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        underlineStyle={styles.underlineStyle}
        onUpdateInput={(searchText,dataSource,params)=>selectOnChange(searchText,dataSource,params,input)}
        onNewRequest={(chosenRequest,index)=>selectOnNewRequest(chosenRequest,index,input,dataSourceConfig)}
        openOnFocus={true}
        dataSource={dataSource}
        dataSourceConfig={dataSourceConfig}
        errorText={error}
        fullWidth={fullWidth || false}
      />
    )
}

export default reduxSelectField;
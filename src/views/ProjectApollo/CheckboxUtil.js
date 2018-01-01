export const checkboxLabel=(boolFlag,fieldDesc)=>{
    const defaultLabel=`Click here to override if ${fieldDesc} from the invoice in the task is not found in the selection provided above.`;
    const checkedLabel='Override value is enabled! Please be aware that your new input will be reported to our Crowd Manager for verification.'
    return boolFlag?checkedLabel:defaultLabel;
}
export const checkboxCustomStyle={
    paddingTop: '9px',fontSize: '10px'
}
export const checkboxCustomLabelStyle=(boolFlag)=>{
    return boolFlag?{width: '100%', color: 'red', fontSize: '12px'}:null;
}

exports.checkboxLabel=checkboxLabel;
exports.checkboxCustomStyle=checkboxCustomStyle;
exports.checkboxCustomLabelStyle=checkboxCustomLabelStyle;
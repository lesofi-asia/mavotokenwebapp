import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IframeViewer from '../IframeViewer'
import * as actions from '../../redux/dialogIframe/actions';

const styles = {
    dialogRoot: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 0
    },
    dialogContent: {
      position: "relative",
      width: "1000px",
      maxWidth: 2000
    },
    dialogBody: {
      paddingBottom: 0
    }
};

const openDialog = props => {
    props.openDialog();
}

const closeDialog = props => {
    props.closeDialog();
}

const DialogIframeViewer = props => {
    const actions = [
        <FlatButton
          label="Close"
          primary={true}
          onClick={()=> closeDialog(props)}
        />,
    ];

    return (
        <div className='container'>
            <div className="row">
                <Dialog
                    title={props.title}
                    actions={actions}
                    modal={false}
                    open={props.dialogIframe.dialogOpen}
                    onRequestClose={()=> closeDialog(props)}
                    contentStyle={ styles.dialogContent }
                    bodyStyle={ styles.dialogBody }
                    style={ styles.dialogRoot }
                    repositionOnUpdate={ false }
                    autoDetectWindowHeight={false}
                    autoScrollBodyContent={true}
                    >
                    <IframeViewer renderUrl={props.renderUrl} />
               </Dialog> 
               <RaisedButton label={props.title} onClick={()=>openDialog(props)} /> 
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        dialogIframe: state.dialogIframe
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      openDialog: () => {
         dispatch(actions.openDialog())  
      },
      closeDialog: () => {
         dispatch(actions.closeDialog())  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DialogIframeViewer)
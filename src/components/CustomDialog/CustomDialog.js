import React from 'react';
import { connect } from 'react-redux';
import Dialog,{ DialogTitle, DialogContent} from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import * as actions from '../../redux/dialogSession/actions';

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

const CustomDialog = props => {
    /*const actions = [
        <FlatButton
          label="Close"
          primary={true}
          onClick={()=> closeDialog(props)}
        />,
    ];*/

    return (
        <div className='container'>
            <div className="row">
                <Dialog
                    fullWidth={false}
                    title={props.title}
                    open={props.dialogSession.dialogOpen}
                    onClose={()=> closeDialog(props)}
                    aria-labelledby="responsive-dialog-title"
                    >
                    <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
                    <DialogContent>
                    {props.children}
                    </DialogContent>
               </Dialog> 
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        dialogSession: state.dialogSession
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

CustomDialog.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    isModal: PropTypes.bool,
    openDialogNow: PropTypes.bool
}


export default connect(mapStateToProps,mapDispatchToProps)(CustomDialog)
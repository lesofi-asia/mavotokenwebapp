import React from 'react';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import * as actions from '../../redux/projApollo/actions';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Add from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';

const styles = {
    tableStyle: {
        width: '100%'
    },
    tableBodyStyle: {
        overflow:'visible'
    },
    tableHdrColH: {
        width: '145px'
    },
    tableHdrColI: {
        width: '105px'
    },
    tableHdrColJ: {
        width: '118px'
    },
    tableHdrColK: {
        width: '155px'
    },
    tableHdrColL: {
        width: '278px'
    },
    tableHdrColM: {
        width: '130px'
    },
    tableHdrColN: {
        width: '140px'
    },
    tableHdrColO: {
        width: '170px'
    },
    tableHdrColP: {
        width: '170px'
    },
    tableHdrColQ: {
        width: '150px'
    },
    tableHdrColR: {
        width: '150px'
    },
    tableHdrColS: {
        width: '130px'
    },
    tableHdrColT: {
        width: '150px'
    }
}

const addButtonOnclick=(e,props)=>{
    e.preventDefault();
    props.openAddInvItemForm();
}

const handleRowSelection=(selectedRows,props)=>{
    if (selectedRows.length){
        const index=selectedRows[selectedRows.length -1 ];
        props.invItemSelected(index);
    } else {
       props.invItemDeselected();
    }
}

const isSelected = (index,props) => {
    const { projApollo } = props;
    if (typeof projApollo.invoiceItemSelectedIndex=='number' && index === projApollo.invoiceItemSelectedIndex) {
        return true;
    }else {
        return false;
    }
}

const removeInvoiceItem=(e,props)=>{
    e.preventDefault();
    const { projApollo } = props;
    const { invoiceItems,lastInvoiceItemSelectedIndex } = projApollo;
    props.removeAnInvoiceItem(invoiceItems,lastInvoiceItemSelectedIndex);
}

const calculateTotalOfColM=projApollo=>{
    const total = projApollo.invoiceItems.length>0? 
    projApollo.invoiceItems.map(item=> parseFloat(item.colMCharge)).reduce((prev,next)=> prev + next):0;
    return total.toFixed(2);
}

const moveDownInvoiceItem=(e,props)=>{
    e.preventDefault();
    props.moveDownInvoiceItem();
}

const moveUpInvoiceItem=(e,props)=>{
    e.preventDefault();
    props.moveUpInvoiceItem();
}

const InvoiceItemsForm = props => {
    const { projApollo } = props;
    
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-sm-4">
                    <h5>Extract Invoice Items</h5>
                </div> 
                <div className="col-sm-3">
                   {projApollo.invoiceItemSelectedIndex?(
                    <FloatingActionButton mini={true} secondary={true} style={{marginRight: 5}} onClick={(e)=> moveUpInvoiceItem(e,props)}  >
                        <KeyboardArrowUp />
                    </FloatingActionButton>):null}
                    {projApollo.invoiceItemSelectedIndex!==null && projApollo.invoiceItemSelectedIndex + 1 < projApollo.invoiceItems.length ?(
                    <FloatingActionButton mini={true} secondary={true} style={{marginRight: 5}} onClick={(e)=> moveDownInvoiceItem(e,props)}>
                        <KeyboardArrowDown />
                    </FloatingActionButton>):null}
                    <FloatingActionButton mini={true} onClick={(e)=> addButtonOnclick(e,props)} style={{marginRight: 5}}>
                       {projApollo.invoiceItemSelectedIndex!==null?<ModeEdit />:<Add />}
                    </FloatingActionButton>
                    {projApollo.invoiceItemSelectedIndex!==null?(
                      <FloatingActionButton mini={true} secondary={true} style={{marginRight: 5}} onClick={(e)=> removeInvoiceItem(e,props)}>
                         <Delete />
                      </FloatingActionButton>
                    ):null}
                </div>  
                <div className="col-sm-4">
                  Total of Column M: <span className="font-weight-bold">{calculateTotalOfColM(projApollo)}</span>
                </div>
            </div>
            <div className='row'>
                <Table style={styles.tableStyle} bodyStyle={styles.tableBodyStyle} 
                    onRowSelection={(selectedRows)=>handleRowSelection(selectedRows,props)}
                    >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn style={styles.tableHdrColH}>Col. H (Hdr. Acct. No.)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColI}>Col. I (Hdr. Total)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColJ}>Col. J (Hdr. Cons.)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColK}>Col. K (Hdr. Cons. Units)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColL}>Col. L (Item Charge Desc.)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColM}>Col. M (Charge)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColN}>Col. N (Consumption)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColO}>Col. O (Consumption Unit)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColP}>Col. P (Service Address)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColQ}>Col. Q (Billing Start Date)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColR}>Col. R (Billing End Date)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColS}>Col. S (Partial/Final)</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHdrColT}>Col. T (Days of Service)</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true} showRowHover={true} deselectOnClickaway={false}>
                        {projApollo.invoiceItems.map(invoiceItem => (
                        <TableRow key={invoiceItem.id} selected={isSelected(invoiceItem.id + 1 ,props)}>
                            <TableRowColumn style={styles.tableHdrColH}>{invoiceItem.colHHdrAcctNo}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColI}>{invoiceItem.colIHdrTotal}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColJ}>{invoiceItem.colJHdrConsump}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColK}>{invoiceItem.colKHdrConsumpUnits}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColL}>{invoiceItem.colLChargeDesc}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColM}>{invoiceItem.colMCharge}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColN}>{invoiceItem.colNConsump}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColO}>{invoiceItem.colOConsumpUnit}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColP}>{invoiceItem.colPServiceAddress}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColQ}>{invoiceItem.colQBillingStartDate}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColR}>{invoiceItem.colRBillingEndDate}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColS}>{invoiceItem.colSPartialFinal}</TableRowColumn>
                            <TableRowColumn style={styles.tableHdrColT}>{invoiceItem.colTDaysOfService}</TableRowColumn>
                        </TableRow>
                        ))}
                    </TableBody>    
                </Table>
            </div>
        </div> 
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        projApollo: state.projApollo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      openAddInvItemForm: () => {
         dispatch(actions.openAddInvItemForm())  
      },
      invItemSelected: (index) => {
        dispatch(actions.invItemSelected(index))  
      },
      invItemDeselected: () => {
        dispatch(actions.invItemDeselected())  
      },
      removeAnInvoiceItem: (currentInvItems,index) => {
        dispatch(actions.removeAnInvoiceItem(currentInvItems,index));  
      },
      moveDownInvoiceItem: () => {
        dispatch(actions.moveDownInvoiceItem())  
      },
      moveUpInvoiceItem: () => {
        dispatch(actions.moveUpInvoiceItem())  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InvoiceItemsForm);